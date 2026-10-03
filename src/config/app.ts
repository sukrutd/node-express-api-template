import dotenv from 'dotenv';
dotenv.config();

const { PORT, NODE_ENV } = process.env;

const config = {
    PORT: Number(PORT) || 5000,
    NODE_ENV: NODE_ENV || 'development'
};

export default config;
