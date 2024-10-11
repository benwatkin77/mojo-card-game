const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Attack} = require('./index')
const { db } = require('../db/config'); // Ensure you're using the correct Sequelize instance

let attack;

describe('Attack Model', () => {
  // Synchronize the database and reset it before running tests
  beforeAll(async () => {
    // Sync all models, force true will drop and recreate the tables
    await db.sync({ force: true });
    
    // Now create a new Attack instance
    attack = await Attack.create({
      title: 'Thunder Strike',
      mojoCost: 20,
      staminaCost: 10
    });
  });

  it('has an id', () => {
    expect(attack.id).toBeDefined();  // Check if ID is defined
  });

  it('has a title', () => {
    expect(attack.title).toBe('Thunder Strike');  // Check title
  });

  it('has a mojo cost', () => {
    expect(attack.mojoCost).toBe(20);  // Check mojo cost
  });

  it('has a stamina cost', () => {
    expect(attack.staminaCost).toBe(10);  // Check stamina cost
  });
});
