const { Pool } = require('pg');

// Define the database connection parameters
const params = {
    user: 'andy', // Default user
    host: 'localhost', // Database server
    database: 'ecommerce', 
    // password: 'your_password', 
    // port: 5432, // Default PostgreSQL port
};

const pool = new Pool(params);

module.exports = pool;

