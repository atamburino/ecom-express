// models/schema.js
const pool = require('../config/db');

// Create a for loop that seeds 100 users into our db with fake data.


const fakeUserGen = async () => {
  try {
    // Users table
    await pool.query(`
      INSERT INTO users (
        first_name
        , last_name
        , email
        , password
        , phone_number
        , date_of_birth
        , address
        , city
        , state
        , country
        , postal_code
        , profile_picture_url
      ) VALUES (
        'Jeff'
        , 'Smith'
        , 'jsmith@gmail.com'
        , 'password12345'
        , '555-555-5656'
        , '1994-08-14'
        , '632 hogwarts way'
        , 'Old Bridge'
        , 'New Jersey'
        , 'USA'
        , '30534'
        , NULL
      );
    `);
    console.log('Test users created successfully');
  } catch (err) {
    console.error('Error creating test user:', err.message);
    throw err;
  }
};

module.exports = { fakeUserGen };