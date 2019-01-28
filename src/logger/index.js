/**
 * Module Dependencies
 */
import * as w from 'winston'
import config from '../config'

const level = config.logLevel;

const logger = w.createLogger({
  format: w.format.combine(
    w.format.colorize(),
    w.format.timestamp(),
    w.format.align(),
    w.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new w.transports.Console({
      level
    })
  ]
});

export default logger;