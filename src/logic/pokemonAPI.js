'use strict';

const max = 649;
const min = 1;
const randomJSObject = Math.random;

async function getPokemons(pokeApi) {
  const idOfPokemonToGet = generateUniqueRandomNumbers(randomJSObject);
  const listOfPokemon = [];
  for (const id of idOfPokemonToGet) {
    const { data: pokemon } = await pokeApi.get(`/pokemon/${id}`);
    listOfPokemon.push(pokemon);
  }
  return listOfPokemon;
}

export function generateUniqueRandomNumbers(randomJSObject) {
  const amountOfNumbers = 4;
  let numbers = new Set();
  while (numbers.size < amountOfNumbers) {
    let randomNumber = Math.floor(randomJSObject() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
}

export default getPokemons;
