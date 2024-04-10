<template lang="">
  <div class="options-container">
    <v-col class="text-center">
      <v-btn-toggle v-model="toggle_none">
        <v-btn
          v-for="pokemon in pokemonArray"
          :key="pokemon.id"
          :disabled="hasTried"
          @click="$emit('selection', pokemon.name)"
        >
          {{ pokemon.name }}</v-btn
        >
      </v-btn-toggle>
    </v-col>
  </div>
</template>
<script setup>
const props = defineProps({
  pokemonArray: Array,
  hasTried: Boolean,
});
</script>
<style scoped>
.options {
  margin-top: 25px;
  justify-self: center;
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
