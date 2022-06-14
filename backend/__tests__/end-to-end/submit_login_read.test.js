const app = require('../../app');
const request = require('supertest')(app);
require('dotenv').config({
    path: '../../.env'
});
describe('Submit, Login, Read', () => {
    it('should submit, then login and read', async () => {
        const response = await request.post('/forms').send({
            "name": "John Doe",
            "email": "john@doe.com",
            "age": 30,
            "phone": "1234567890",
            "businessName": "ABC Company",
            "GSTNo": "ABC1234567",
            "street": "ABC Street",
            "city": "ABC City",
            "state": "ABC State",
            "zip": 123456,
            "amountINR": 100000,
            "tenureYrs": 10,
            "interestRate": 10
        });
        expect(response.status).toBe(201);
        const responseID = response.body._id;
        const response2 = await request.post('/auth/login').send({
            username: 'admin',
            password: 'password'
        });
        expect(response2.status).toBe(200);
        expect(response2.body.user).toBeDefined();
        expect(response2.headers["set-cookie"]).toBeDefined();
        const token = response2.headers["set-cookie"][0].split(';')[0].split('=')[1];
        const response3 = await request.get('/forms').set('cookie', `token=${token}`);
        expect(response3.status).toBe(200);
        expect(response3.body.length).toBeDefined();
        const ids = response3.body.map(x => x._id);
        expect(ids).toContain(responseID);
    })
})