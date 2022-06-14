// In this file you can configure migrate-mongo
require('dotenv').config({
    path: '../.env'
})
const config = {
  mongodb: {
    url: process.env.DATABASE_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 3600000,
      socketTimeoutMS: 3600000,
    }
  },

  migrationsDir: "migrations",

  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: 'commonjs',
};

module.exports = config;
