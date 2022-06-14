const app = require('../../app');
const request = require('supertest')(app);

describe('Login', () => {
    it('should return a token', async () => {
        const response = await request.post('/auth/login').send({
            username: 'admin',
            password: 'password'
        });
        expect(response.status).toBe(200);
        expect(response.body.user).toBeDefined();
        expect(response.headers["set-cookie"]).toBeDefined();
    })
    it('should return a 401 if the password is incorrect', async () => {
        const response = await request.post('/auth/login').send({
            username: 'admin',
            password: 'wrongpassword'
        });
        expect(response.status).toBe(401);
    })
    it('should return a 404 if the username is incorrect', async () => {
        const response = await request.post('/auth/login').send({
            username: 'wrongusername',
            password: 'password'
        });
        expect(response.status).toBe(404);
    })
    it('should return a 400 if the username or password is not provided', async () => {
        const response = await request.post('/auth/login').send({
            username: 'admin'
        });
        expect(response.status).toBe(400);
        const response2 = await request.post('/auth/login').send({
            password: 'password'
        });
        expect(response2.status).toBe(400);
    })
})
