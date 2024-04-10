import pokeAPI from '@/logic/api/axiosConfig';
import getPokemons, {
  generateUniqueRandomNumbers,
} from '@/logic/pokemonAPI.js';
import { it, expect, describe, beforeEach, vi } from 'vitest';
import expectedResponse from '@/tests/unit/expectedResponse.json';

describe('Random function tests', () => {
  let array;
  const maxRandom = 1 - 10e-17;
  beforeEach(() => {
    const mockRandom = vi
      .fn()
      .mockImplementation(Math.random)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(maxRandom);
    array = generateUniqueRandomNumbers(mockRandom);
  });
  it('should return an array of size 4', () => {
    const expectedSize = 4;
    expect(array).toHaveLength(expectedSize);
  });
  it('should be 4 different numbers', () => {
    const expectedSize = 4;
    let setOfNumbers = new Set();
    for (const number of array) {
      setOfNumbers.add(number);
    }
    expect(setOfNumbers).toHaveLength(expectedSize);
  });
  it('should have numbers in the range 1 to 649', () => {
    for (const randomNumber of array) {
      expect(randomNumber).toBeGreaterThanOrEqual(1);
      expect(randomNumber).toBeLessThanOrEqual(649);
    }
  });
});

describe('getPokemons related tests', () => {
  const spyApi = vi.spyOn(pokeAPI, 'get').mockResolvedValue(expectedResponse);

  it('should have called get method 4 times', async () => {
    await getPokemons(pokeAPI);
    expect(spyApi).toHaveBeenCalled(4);
  });

  it('should have name and id properties', async () => {
    const listOfPokemon = await getPokemons(pokeAPI);
    for (const pokemon of listOfPokemon) {
      expect(pokemon).toHaveProperty('name');
      expect(pokemon).toHaveProperty('id');
    }
  });
});
