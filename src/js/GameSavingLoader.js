import json from './parser';
import read from './reader';

export default class GameSavingLoader {

  async load() {
    try {
      const readResult = await read();
      const parseResult = await json(readResult);
      return parseResult;
    }
    catch(error) {
      throw new Error(error);
    }
  }
}


/*
load() {
    read().then((data) => {
      return json(data);
    }).then ((data) => {
      console.log(data);
      return data;
    }).catch(error => {
      throw new Error(error);
    });
  }
*/