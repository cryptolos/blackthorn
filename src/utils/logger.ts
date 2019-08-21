import winston, {Logger} from 'winston';
import * as fs from 'fs';

const logDir = 'log';
if (!fs.existsSync(logDir)) {
    // Create the directory if it does not exist
    fs.mkdirSync(logDir);
}

const logger = new (Logger)({
    transports: [

        // new winston.transports.Console({
        //     colorize: true,
        //     prettyPrint: true,
        //     timestamp:  () => {
        //         return new Date();
        //     },
        //     level: 'silly',
        //     handleExceptions: true,
        //     humanReadableUnhandledException: true
        // }),
        // new winston.transports.File({
        //     level: process.env.NODE_ENV === 'development' ? 'verbose' : 'info',
        //     filename: logDir + '/logs.log',
        //     colorize: true,
        //     timestamp:  () => {
        //         return new Date();
        //     },
        //     json: true,
        //     maxsize: 1024 * 1024 * 4, // 10MB
        //     handleExceptions: true,
        //     humanReadableUnhandledException: true
        // })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export default logger;