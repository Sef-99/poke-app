'use strict';

export function getIdPokemonToGuess(listOfPokemon) {
  const randomNum = Math.floor(Math.random() * 4);
  return listOfPokemon[randomNum];
}

export function checkIfCorrectGuess(guess, answer) {
  console.log(guess === answer);
  return guess === answer;
}

export function messageGuess(hasGuessed, pokemonName) {
  return hasGuessed
    ? 'Congrats. Your guess was correct!'
    : `Sorry, wrong guess. The answer is: ${capitalizeFirstLetter(
        pokemonName
      )}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
