import { createLogger, format, transports } from 'winston';
import { Format } from 'logform';
import { LOG_FILE } from '../consts/const';



const logFormat: Format = format.printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.splat(),
        logFormat
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                logFormat
            ),
        }),
        new transports.File({
            filename: LOG_FILE,
            level: 'error',
        }),
        new transports.File({ filename: 'logs/combined.log' }),
    ],
});

export default logger;
