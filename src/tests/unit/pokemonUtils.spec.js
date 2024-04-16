import {
  getPokemonToGuess,
  checkIfCorrectGuess,
  messageGuess,
} from '@/logic/pokemonUtils.js';
import { vi, describe, expect, it } from 'vitest';
import expectedResponse from '@/tests/unit/mocks/expectedResponse.json';

describe('tests related to pokemonUtils functions', () => {
  const mockRandom = vi.spyOn(globalThis.Math, 'random').mockReturnValue(0);
  it('should return first element of array', () => {
    const fakePokemonObj = {};
    const expectedReturnValue = expectedResponse;
    const returnedValue = getPokemonToGuess([
      expectedResponse,
      fakePokemonObj,
      fakePokemonObj,
      fakePokemonObj,
    ]);
    expect(returnedValue).toEqual(expectedReturnValue);
  });

  it('should return correct guess', () => {
    const guess = 'pikachu';
    const answer = 'pikachu';
    const expectedResult = true;

    const retunedValue = checkIfCorrectGuess(guess, answer);

    expect(retunedValue).toEqual(expectedResult);
  });

  it('should return wrong guess', () => {
    const guess = 'pikachu';
    const answer = 'charizard';
    const expectedResult = false;

    const retunedValue = checkIfCorrectGuess(guess, answer);

    expect(retunedValue).toEqual(expectedResult);
  });

  it('should return correct message after guessing', () => {
    const expectedResult = 'Congrats. Your guess was correct!';
    const pokemonName = 'Pikachu';
    const hasGuessed = true;

    const retunedValue = messageGuess(hasGuessed, pokemonName);

    expect(retunedValue).toEqual(expectedResult);
  });

  it('should return correct message after guessing', () => {
    const pokemonName = 'Pikachu';
    const expectedResult = `Sorry, wrong guess. The answer is: Pikachu`;
    const hasGuessed = false;

    const retunedValue = messageGuess(hasGuessed, pokemonName);

    expect(retunedValue).toEqual(expectedResult);
  });
});
