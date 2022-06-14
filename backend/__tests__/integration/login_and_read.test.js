const app = require('../../app');
const request = require('supertest')(app);
require('dotenv').config({
    path: '../../.env'
});
describe('Login and Read submitted data', () => {
    it('should return a token and use the token to read data', async () => {
        const response = await request.post('/auth/login').send({
            username: 'admin',
            password: 'password'
        });
        expect(response.status).toBe(200);
        expect(response.body.user).toBeDefined();
        expect(response.headers["set-cookie"]).toBeDefined();
        const token = response.headers["set-cookie"][0].split(';')[0].split('=')[1];
        const response2 = await request.get('/forms').set('cookie', `token=${token}`);
        expect(response2.status).toBe(200);
        expect(response2.body.length).toBeDefined();
    })
})