/**
 * Module Dependencies
 */
import os from 'os';
import moment from 'moment';
import cluster from 'cluster';
import express from 'express';
import bodyParser from 'body-parser';
import addRequestId from 'express-request-id';
import expressValidator from 'express-validator';

/**
 * Additional Modules
 */
import config from './config';
import routes from './routes';
import logger from './logger';

let app = {};

if (cluster.isMaster && !module.parent) {
  const _cpus = config.clusterSize || os.cpus().length;

  logger.info(`[PID ${process.pid}] Master is running.`);

  for (let i = 0; i < _cpus; ++i) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    logger.warn(`[PID ${process.pid}] Worker died.`);
    cluster.fork();
  });
} else {
  /**
   * Create Express App
   */
  app = express();

  /**
   * Middlewares
   */
  // Set request id
  app.use(addRequestId());

  // Tranaform body request to json
  app.use(bodyParser.json());

  // Create custom validation error response
  app.use(expressValidator({
    errorFormatter: function (param, msg) {
      const namespace = param.split('.');
      let formParam = namespace.shift(),
        code = 400;

      while (namespace.length) {
        ++code;
        formParam += '[' + namespace.shift() + ']';
      }

      return {
        code: code,
        field: formParam,
        message: msg
      };
    }
  }));

  // Enable CORS
  app.use(function (request, result, next) {
    result.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

  // Routing
  app.use('/', routes);

  // 404 error handler
  app.use(function (request, response, next) {
    response.status(404);
    response.send({
      data: {   
        status: 'Not Found',
        date: moment().format(),
        message: 'Resource don\'t exists.',
        request_id: request.id
      }
    });
    next();
  });

  // 500 error handler
  app.use(function (err, request, response, next) {
    var status = err.status || 500;
    response.status(status).send({
      data: {   
        status: 'Internal Server Error',
        date: moment().format(),
        message: '[Unexpected exception] ' + err.stack,
        request_id: request.id
      }
    });
    next();
  });

  // Enable log error when happen uncaught exception
  process.on('uncaughtException', function (err) {
    if (config.log) {
      logger.error('Node alert an uncaught exception:');
      logger.error(err);
    }
  });

  /**
   * Initializing
   */
  // Adding port to listeing on
  app.set('port', config.port);

  // Starting app to app listen on
  app.listen(config.port);
  if (config.log) {
    logger.info(`[PID ${process.pid}] Worker is running.`);
  }
}

// For testing
export default app;