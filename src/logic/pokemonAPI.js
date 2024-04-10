'use strict';

import pokeApi from './api/axiosConfig.js';

async function getPokemons() {
  const idOfPokemonToGet = generateUniqueRandomNumbers(1, 649);
  const listOfPokemon = [];
  for (const id of idOfPokemonToGet) {
    const { data: pokemon } = await pokeApi.get(`/pokemon/${id}`);
    listOfPokemon.push(pokemon);
  }
  return listOfPokemon;
}

function generateUniqueRandomNumbers(max, min) {
  const amountOfNumbers = 4;
  let numbers = new Set();
  while (numbers.size < amountOfNumbers) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNumber);
  }
  console.log(numbers);
  return Array.from(numbers);
}

export default getPokemons;
