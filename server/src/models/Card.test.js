const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Card } = require('./index')
const { db } = require('../db/config');

let card;

describe('Card Model', () => {
  // Sync the database and create the card before tests run
  beforeAll(async () => {
    await db.sync({ force: true });

    card = await Card.create({
      attack: 50,
      defense: 30,
      name: 'Fireball'
    });
  });

  it('has an id', () => {
    expect(card.id).toBeDefined();
  });

  it('has an attack value', () => {
    expect(card.attack).toBe(50);
  });

  it('has a defense value', () => {
    expect(card.defense).toBe(30);
  });

  it('has a name', () => {
    expect(card.name).toBe('Fireball');
  });
});

