const app = require('../../app');
const request = require('supertest')(app);
const jwt = require('jsonwebtoken');
require('dotenv').config({
    path: '../../.env'
});

describe('Read all submitted data', () => {
    it('should return a 200 if the user is logged in', async () => {
        const token = jwt.sign({username: 'admin'}, process.env.JWT_SECRET);
        const response = await request.get('/forms').set('cookie', `token=${token}`);
        expect(response.status).toBe(200);
        expect(response.body.length).toBeDefined();
    })
    it('should return a 401 if the user is not logged in', async () => {
        const response = await request.get('/forms');
        expect(response.status).toBe(401);
    })
});
