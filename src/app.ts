import express, { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';
import logger from '@config/logger';

const app = express();

app.get('/', (_, res) => {
    res.send('Welcome to Authentication Service!');
});

// Global Error Handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, _req: Request, res: Response, _next: NextFunction) => {
    logger.error(err.message);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message
            }
        ]
    });
});

export default app;
