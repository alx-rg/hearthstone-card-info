# TypeScript HearthStone Card Info Library

![npm](https://img.shields.io/npm/v/hearthstone-card-info)
![npm bundle size](https://img.shields.io/bundlephobia/min/hearthstone-card-info)

Module to retrieve Hearthstone information about the cards, types etc from [Hearthstone API](https://rapidapi.com/omgvamp/api/hearthstone).

## Installation

- Sign up for your own API Key on [Rapid API](https://rapidapi.com/)
- Install hearthstone-card-info library with:

```bash
npm i hearthstone-card-info
```

[Link to npm library](https://www.npmjs.com/package/hearthstone-card-info)

## Usage

```ts
const HearthstoneInfo = require("hearthstone-card-info");

// Insert your RapidApi API Key:
const myApiKey = "<MYAPIKEY>";

// Instantiate a new HearthstoneInfo class
const hearthstone = new HearthstoneInfo(myApiKey);

// Use the mothods below to return you the information you want in the form of a Promise:
hearthstone.getFileInfo("info").then((data) => console.log(data));
/* 
  {
  patch: '24.4.0.150659',
    classes: [
      'Death Knight', 'Druid',
      'Hunter',       'Mage',
      'Paladin',      'Priest',
      'Rogue',        'Shaman',
      'Warlock',      'Warrior',
      'Dream',        'Neutral',
      'Whizbang',     'Demon Hunter'
    ],
    sets: [
      'Basic',
        etc....
    }
  }
*/

hearthstone.getSingleCard("tsla").then((card) => console.log(card[5]));
/*
  {
    name: 'Leeroy Jenkins',
    img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/cf014c0c9363f70cb7e4f7f7c4086ab42bc5d2afecf421f35b9c87c81943d9d4.png',
    flavor: 'At least he has Angry Chicken.'
  }
*/

hearthstone.getRaceCard("Pirate").then((race) => console.log(race[1]));
/*
  {
    cardId: 'LT23_803H2',
    dbfId: 87090,
    name: 'Cutthroat Willie',
    cardSet: 'Mercenaries',
    type: 'Minion',
    rarity: 'Epic',
    cost: 0,
    attack: 10,
    health: 120,
    text: 'Protectors take @ more damage.',
    race: 'Pirate',
    playerClass: 'Neutral',
    locale: 'enUS'
  }
*/

hearthstone.getTypeCard("Minion").then((type) => console.log(type[0]));
/*
  {
    cardId: 'TSC_777t25',
    dbfId: 91587,
    name: '???',
    cardSet: 'Voyage to the Sunken City',
    type: 'Minion',
    cost: 0,
    attack: 0,
    health: 1,
    text: '<b>???</b>',
    playerClass: 'Neutral',
    locale: 'enUS'
  }
*/

hearthstone
  .getFactionCard("Neutral")
  .then((faction) => console.log(faction[0]));
/*
  {
    cardId: 'BAR_753',
    dbfId: 70579,
    name: '???',
    cardSet: 'Forged in the Barrens',
    type: 'Hero Power',
    faction: 'Neutral',
    text: '<b>???</b>',
    playerClass: 'Neutral',
    locale: 'enUS'
  }
*/
```

## Testing

To run tests:

- Include your API key in the `tests/test.js` file. Then run:

```bash
npm test
```
