import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';
import json from '../parser';

jest.mock('../reader');
jest.mock('../parser');

describe('GameSavingLoader - testing with mocks', () => {

    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('should throw error when read fails', async () => {
      read.mockRejectedValue(new Error('Ошибка чтения'));
      const loader = new GameSavingLoader();
      await expect(loader.load()).rejects.toThrow('Ошибка чтения');
    });
  
    test('should throw error when parsing fails', async () => {
      read.mockResolvedValue('invalid data');
      json.mockRejectedValue(new Error('Ошибка парсинга'));
      const loader = new GameSavingLoader();
      await expect(loader.load()).rejects.toThrow('Ошибка парсинга');
    });
  });
  