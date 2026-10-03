import config from '@config/app';
import logger from '@config/logger';
import app from './app';

const startServer = () => {
    const port = config.PORT;

    try {
        app.listen(port, () => {
            logger.info(`Auth Service is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

startServer();
