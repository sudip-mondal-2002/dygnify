const app = require('../../app');
const request = require('supertest')(app);

describe('Submit a form', () => {
    it('should return a 201 if the form is valid', async () => {
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
    });
    it('should return a 400 if the form is invalid', async () => {
        const response = await request.post('/forms').send({
            "name": "John Doe",
            "email": "xxx",
        });
        expect(response.status).toBe(400);
    })
})