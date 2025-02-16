// TODO: write your code here
import parser from './parser';
import reader from './reader';
import GameSavingLoader from './GameSavingLoader';

console.log(parser, reader, GameSavingLoader);

GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
  }, (error) => {
    // ...
  });

