import request from 'supertest';
import app from './app';

describe('App', () => {
    it('should be defined', () => {
        expect(app).toBeDefined();
    });

    it('should return 200 status code for GET /', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});
