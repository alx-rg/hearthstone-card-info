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
      // const data = await cardInfo
      // console.log(data)
      // return data;
      const cleanData = (cardInfo as Array<any>).map(e => {
        const {name, img, flavor} = e;
        return {
          name,
          img,
          flavor
        }
      })
      // console.log(cleanData)
      return cleanData;
    } catch (err) {
      console.error(err);
    }
  }

  async getRaceCard(race: string): Promise<object> {
    try {
      const raceInfo = await this.getFileInfo(`cards/races/${race}`);
      const data = await raceInfo
      // console.log(data)
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getTypeCard(type: string): Promise<object> {
    try {
      const typeInfo = await this.getFileInfo(`cards/types/${type}`);
      const data = await typeInfo
      // console.log(data)
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getFactionCard(faction: string): Promise<object> {
    try {
      const factionInfo = await this.getFileInfo(`cards/factions/${faction}`);
      const data = await factionInfo
      // console.log(data)
      return data;
    } catch (err) {
      console.error(err);
    }
  }

}

// const hsinfo = new HearthstoneInfo(myApiKey)
// hsinfo.getFileInfo("info").then(data => console.log(data))
// console.log(hsinfo.getFileInfo("info"))
// hsinfo.getSingleCard("Leeroy Jenkins").then(data => console.log(data[5]))
// console.log(hsinfo.getRaceCard("Pirate"))
// hsinfo.getRaceCard("Pirate").then(data => console.log(data[1]))
// console.log(hsinfo.getTypeCard("Minion"))
// hsinfo.getTypeCard("Minion").then(data => console.log(data[0]))
// console.log(hsinfo.getFactionCard("Neutral"))
// hsinfo.getFactionCard("Neutral").then(data => console.log(data[0]))

module.exports = HearthstoneInfo

