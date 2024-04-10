<template lang="">
  <div class="progress-container" v-if="!pokemonId">
    <v-progress-circular indeterminate></v-progress-circular>
  </div>

  <div v-else>
    <h1>Who's the Pokemón?</h1>
    <PokemonPictures :pokemon-id="pokemonId" :has-guessed="hasTried" />
    <PokemonOptions
      :pokemon-array="pokemonOptionsList"
      :hasTried="hasTried"
      @selection="checkAnswer($event)"
    />
    <div v-if="message" class="fade-in">
      <h1>{{ message }}</h1>
      <v-container fluid>
        <v-row justify="center">
          <v-btn @click="newGame">Play Again</v-btn>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script setup>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPictures from '@/components/PokemonPictures.vue';
import { ref, reactive, onMounted } from 'vue';
import getPokemons from '@/logic/pokemonAPI.js';
import {
  checkIfCorrectGuess,
  getIdPokemonToGuess,
  messageGuess,
} from '@/logic/pokemonUtils.js';
import pokeApi from '@/logic/api/axiosConfig.js';

let apiResult;
const pokemonOptionsList = ref([]);
const hasTried = ref(false);
const hasGuessedCorrectly = ref(false);
const message = ref('');
const pokemonId = ref();
let pokemonToGuess;

async function init() {
  apiResult = await getPokemons(pokeApi);
  pokemonOptionsList.value = apiResult;
  console.log(pokemonOptionsList);
  pokemonToGuess = getIdPokemonToGuess(pokemonOptionsList.value);
  pokemonId.value = pokemonToGuess.id;
  hasGuessedCorrectly.value = false;
  hasTried.value = false;
  message.value = '';
}

function checkAnswer(guess) {
  hasTried.value = true;
  hasGuessedCorrectly.value = checkIfCorrectGuess(guess, pokemonToGuess.name);
  message.value = messageGuess(hasGuessedCorrectly.value, pokemonToGuess.name);
}

async function newGame() {
  pokemonId.value = 0;
  await init();
}

onMounted(async () => {
  init();
});
</script>
<style>
h1 {
  text-align: center;
  margin-bottom: 25px;
  margin-top: 25px;
}

v-btn {
  justify-self: center;
}

.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
}
</style>
