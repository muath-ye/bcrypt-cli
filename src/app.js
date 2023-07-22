#!/usr/bin/env node

const bcrypt = require('bcrypt');
const saltRounds = 10; // the number of salt rounds to use

// get the user password from the command line arguments
const password = process.argv[2];

// display usage instructions if no password is provided
if (!password) {
  console.log('Usage: node app.js <password>');
  console.log('  <password>   The password to hash');
  process.exit(1);
}

// display help message if requested
if (password === '-h' || password === '--help') {
  console.log('Usage: node app.js <password>');
  console.log('  <password>   The password to hash');
  console.log('  -h, --help   Display this help message');
  process.exit(0);
}

// generate a salt and hash the password
bcrypt.genSalt(saltRounds, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});
