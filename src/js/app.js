import GameSavingLoader from './GameSavingLoader';

const test = new GameSavingLoader();
console.log(test.load());
/*
test.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});

*/