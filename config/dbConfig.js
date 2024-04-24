const { Client } = require("pg");
const { configDotenv } = require("dotenv");

configDotenv();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    required: true,
  },
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => {
    console.error("Error connecting to PostgreSQL database:", err.message);
    reconnect();
  });

client.on('error', (err) => {
  console.error('PostgreSQL client error:', err.message);
  reconnect();
});

function reconnect() {
  console.log('Attempting to reconnect to PostgreSQL database in 5 seconds...');
  setTimeout(() => {
    client.connect()
      .then(() => console.log('Reconnected to PostgreSQL database'))
      .catch(err => {
        console.error("Error reconnecting to PostgreSQL database:", err.message);
        reconnect();
      });
  }, 5000);
}

module.exports = client;
