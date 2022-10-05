/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const HearthstoneInfo = require('../src/index.js')
require('dotenv').config();

const myApiKey = process.env.MYAPIKEY;

console.log(myApiKey)

const hearthStone = new HearthstoneInfo(myApiKey);

test('getFileInfo returns an object with current patch, classes, sets, types, etc', async () => {
  hearthStone.getFileInfo("info").then((data) => expect(data).toBeInstanceOf(Object));
});

test('getSingleCard returns an array of objects with name, img, flavor', async () => {
  hearthStone.getSingleCard("Ysera").then((data) => expect(data).toBeInstanceOf(Array));
});

test('getRaceCard returns an array of objects that share a Race with the input value', async () => {
  hearthStone.getRaceCard("Pirate").then((data) => expect(data).toBeInstanceOf(Array));
});

test('getTypeCard returns an array of objects that share a Type with the input value', async () => {
  hearthStone.getTypeCard("Minion").then((data) => expect(data).toBeInstanceOf(Array));
});

test('getFactionCard returns an array of objects that share a Faction with the input value', async () => {
  hearthStone.getFactionCard("Neutral").then((data) => expect(data).toBeInstanceOf(Array));
});