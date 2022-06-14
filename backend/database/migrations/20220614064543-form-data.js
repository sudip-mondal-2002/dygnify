module.exports = {
  async up(db, client) {
    await db.collection('formdatas').insertOne(
      {
        personal: {
          name: 'John Doe',
          email: 'john@doe.com',
          age: 30,
          phone: '1234567890'
        },
        business: {
          name: 'ABC Company',
          GSTNo: 'ABC1234567',
          address: {
            street: 'ABC Street',
            city: 'ABC City',
            state: 'ABC State',
            zip: 123456
          }
        },
        loan: {
          amountINR: 100000,
          tenureYrs: 10,
          interestRate: 10
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    )
  },

  async down(db, client) {
    await db.collection('formdatas').deleteMany({})
  }
};
