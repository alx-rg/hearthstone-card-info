/* eslint-disable import/first */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require("axios")
require('dotenv').config();

const myApiKey: string = process.env.MYAPIKEY as string;

class HearthstoneInfo {
  apiKey : string
  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async getFileInfo(lookup: string): Promise<object> {
    const options = {
      method: 'GET',
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/${lookup}`,
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      return await response.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getSingleCard(card: string): Promise<object> {
    try {
      const cardInfo = await this.getFileInfo(`cards/${card}`);
      const cleanData = (cardInfo as Array<any>).map(e => {
        const {name, img, flavor} = e;
        return {
          name,
          img,
          flavor
        }
      })
      return cleanData;
    } catch (err) {
      console.error(err);
    }
  }

  async getRaceCard(race: string): Promise<object> {
    try {
      const raceInfo = await this.getFileInfo(`cards/races/${race}`);
      const data = await raceInfo
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getTypeCard(type: string): Promise<object> {
    try {
      const typeInfo = await this.getFileInfo(`cards/types/${type}`);
      const data = await typeInfo
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getFactionCard(faction: string): Promise<object> {
    try {
      const factionInfo = await this.getFileInfo(`cards/factions/${faction}`);
      const data = await factionInfo
      return data;
    } catch (err) {
      console.error(err);
    }
  }

}

module.exports = HearthstoneInfo

