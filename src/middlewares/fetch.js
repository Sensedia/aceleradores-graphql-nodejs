/**
 * Module Dependencies
 */
import nodeFetch from 'node-fetch';
import fetchWrap from 'fetch-wrap';
import middleware from 'fetch-wrap/middleware';

/**
 * Additional Modules
 */
import config from '../config';
import logger from '../logger';

let fetch = fetchWrap(nodeFetch, [
  // Set base url from backends
  middleware.urlParams({
    weatherURL: config.backends.weather.url,
    weatherCredentials: config.backends.weather.credentials,
    countryURL: config.backends.country.url,
    currencyURL: config.backends.currency.url,
    currencyCredentials: config.backends.currency.credentials
  }),

  function (url, options, fetch) {
    return fetch(url, options);
  },

  // Set default headers
  function (url, options, fetch) {
    return fetch(url, fetchWrap.merge(
      {},
      options,
      {
        timeout: +config.timeout,
        start: new Date()
      })
    );
  },

  function (url, options, fetch) {
    return fetch(url, options);
  },

  // Body request to JSON
  middleware.sendJSON(),

  // Custom middleware
  // 1. Body response to JSON
  // 2. Join set-cookie header to cookie data
  function (url, options, fetch) {
    return fetch(url, options).then(function (response) {
      try {
        if (config.log) {
          const log = { 
            "PID": process.pid,
            "Request-Id:": options.requestId, 
            "Operation:": options.method + " " + url, 
            "Request:": options.body ? options.body : null,             
            "Response time: ": (new Date() - options.start) + "ms."
          };
          if (config.log) logger.info(JSON.stringify(log));
        }
        return response.json();
      } catch (err) {
        if (config.log) {
          const log = { 
            "PID": process.pid,
            "Request-Id:": options.requestId, 
            "Operation:": options.method + " " + url, 
            "Request:": options.body ? options.body : null,             
            "Response time: ": (new Date() - options.start) + "ms. Parse error"
          };
          if (config.log) logger.info(JSON.stringify(log));
        }
        if (config.log) logger.error(err);
        throw `It was not possible to connect to ${url}`;
      }
    }).catch(function (err) {
      if (config.log) {
        const log = { 
          "PID": process.pid,
          "Request-Id:": options.requestId, 
          "Operation:": options.method + " " + url, 
          "Request:": options.body ? options.body : null,             
          "Response time: ": (new Date() - options.start) + "ms. Connection error"
        };
        if (config.log) logger.info(JSON.stringify(log));
      }
      if (config.log) logger.error(err);
      throw `It was not possible to connect to ${url}`;
    });
  }
]);

export default fetch;