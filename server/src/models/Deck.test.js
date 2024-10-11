const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Deck } = require('./index');
const { db, DataTypes } = require('../db/config'); // Ensure you're using the correct Sequelize instance

let deck;

describe('Deck Model', () => {
  // Synchronize the database and reset it before running tests
  beforeAll(async () => {
    await db.sync({ force: true }); // Sync the database

    // Now create a new Deck instance
    deck = await Deck.create({
      name: 'Magic Deck',
      xp: 100
    });
  });

  it('has an id', () => {
    expect(deck.id).toBeDefined();  // Check if ID is defined
  });

  it('has a name', () => {
    expect(deck.name).toBe('Magic Deck');  // Check the name
  });

  it('has experience points (xp)', () => {
    expect(deck.xp).toBe(100);  // Check xp value
  });
});