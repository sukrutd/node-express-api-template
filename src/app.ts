import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Authentication Service!');
});

export default app;
