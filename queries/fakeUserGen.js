import { faker } from "@faker-js/faker";
const pool = require("../config/db");

// Create a for loop that seeds 100 users into our db with fake data.

// for (let i = 0; i < 100; i++  ) {
//     console.log(i);
//     let person = faker.person.firstName();
//     console.log(person);
// }

const fakeUserGen = async () => {
  try {
    for (let i = 0; i < 100; i++) {
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
          '${faker.person.firstName()}'
          , '${faker.person.lastName()}'
          , '${faker.internet.email()}'
          , '${faker.internet.password()}'
          , '${faker.phone.number("###-###-####")}'
          , '${
            faker.date
              .between({ from: "1994-01-01", to: "2006-12-31" })
          }'
          , '${faker.location.streetAddress()}'
          , '${faker.location.city()}'
          , '${faker.location.state()}'
          , '${faker.location.country()}'
          , '${faker.location.zipCode()}'
        , NULL
      );
    `);
    console.log(`Created user ${i + 1} of 100`);
    }
    console.log("Test users created successfully");
  } catch (err) {
    console.error("Error creating test user:", err.message);
    throw err;
  }
};

module.exports = { fakeUserGen };
