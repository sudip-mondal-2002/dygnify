const bcrypt = require('bcrypt');
module.exports = {
  async up(db, client) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash('password', salt);
    await db.collection('authdatas').insertOne(
      {
        username: 'admin',
        passwordHash: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    );
  },

  async down(db, client) {
    await db.collection('authdatas').deleteMany({});
  }
};
