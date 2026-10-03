import { config } from '@config';
import app from './app';

const startServer = () => {
    const port = config.PORT;

    try {
        app.listen(port, () => {
            console.log(`Authentication Service is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
        process.exit(1);
    }
};

startServer();
