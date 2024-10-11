const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { User } = require('./index')
const { db } = require('../db/config'); // Ensure you're using the correct Sequelize instance

let user;

describe('User Model', () => {
  // Synchronize the database and reset it before running tests
  beforeAll(async () => {
    await db.sync({ force: true }); // Sync the database

    // Now create a new User instance
    user = await User.create({
      username: 'gandalf'
    });
  });

  it('has an id', () => {
    expect(user.id).toBeDefined();  // Check if ID is defined
  });

  it('has a username', () => {
    expect(user.username).toBe('gandalf');  // Check the username
  });
});
