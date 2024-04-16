import { vi, it, describe, beforeEach, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage.vue';
import { pokemonArrayMock } from '@/tests/unit/mocks/pokemonArray.mock.js';

describe('Pokemon page related tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PokemonPage);
  });

  it('should match with snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should match snapshot with pokemons', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonOptionsList: pokemonArrayMock,
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
