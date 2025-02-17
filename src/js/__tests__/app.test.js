import GameSavingLoader from '../GameSavingLoader';

describe('GameSavingLoader - testing with real modules', () => {
  test('should return correct data', async () => {
    const test = new GameSavingLoader();
    const result = await test.load();
    expect(result).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
  });
});


