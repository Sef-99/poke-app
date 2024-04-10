<template lang="">
  <div class="pokemon-container">
    <img class="hidden-pokemon" :src="imgSrc" alt="Pokemon Picture" />
    <img
      v-if="hasGuessed"
      class="fade-in"
      :src="imgSrc"
      alt="Pokemon Picture"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  pokemonId: Number,
  hasGuessed: Boolean,
});

console.log(props.pokemonId);

const imgSrc = computed(() => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`;
});
</script>

<style scoped>
.hidden-pokemon {
  filter: brightness(0);
}

.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  left: 50%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;

  transform: translateX(-50%);
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
