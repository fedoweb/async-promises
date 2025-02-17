import GameSavingLoader from './GameSavingLoader';

const test = new GameSavingLoader();

test.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});

