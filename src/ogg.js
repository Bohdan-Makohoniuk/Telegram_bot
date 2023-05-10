import axios from 'axios';
import { createWriteStream } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

class Oggconverter {
  constructor() {}
  toMp3() {}
  async create(url, filename) {
    try {
      const response = await axios({
        method: 'get',
        url,
        responseType: 'stream',
      });
      const stream = createWriteStream();
    } catch (e) {
      console.log(e.massage);
    }
  }
}

export const Oggconverter = new Oggconverter();
