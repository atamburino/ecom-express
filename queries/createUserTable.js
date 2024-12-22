// models/schema.js
const pool = require('../config/db');

const createUserTable = async () => {
  try {
    // Users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        phone_number VARCHAR(15),
        date_of_birth DATE,
        address TEXT,
        city VARCHAR(50),
        state VARCHAR(50),
        country VARCHAR(50),
        postal_code VARCHAR(20),
        role VARCHAR(20) DEFAULT 'user',
        profile_picture_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
`);

    console.log('User table created successfully');
  } catch (err) {
    console.error('Error creating tables:', err.stack);
    throw err;
  }
};

createUserTable();

module.exports = { createUserTable };