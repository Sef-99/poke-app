import { generateUniqueRandomNumbers } from '@/logic/pokemonAPI.js';
import { it, expect, describe, beforeEach, vi } from 'vitest';

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
