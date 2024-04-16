import { shallowMount } from '@vue/test-utils';
import { expect, describe, it, beforeEach } from 'vitest';
import PokemonOptions from '@/components/PokemonOptions.vue';
import { pokemonArrayMock } from '@/tests/unit/mocks/pokemonArray.mock.js';

describe('PokemonOptions component related tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemonArray: pokemonArrayMock,
        hasTried: false,
      },
    });
  });

  it('should match snapshot', () => {
    const wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemonArray: pokemonArrayMock,
        hasTried: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should correctly show the 4 options available', () => {
    const buttons = wrapper.findAll('v-btn');

    expect(buttons.length).toBe(4);
    expect(buttons[0].text()).toBe('pikachu');
    expect(buttons[1].text()).toBe('charmander');
    expect(buttons[2].text()).toBe('venusaur');
    expect(buttons[3].text()).toBe('mew');
  });

  it('should emit selection event when clicked', () => {
    const buttons = wrapper.findAll('v-btn');

    for (let button of buttons) {
      button.trigger('click');
    }

    expect(wrapper.emitted('selection').length).toBe(4);
    expect(wrapper.emitted('selection')[0][0]).toEqual('pikachu');
    expect(wrapper.emitted('selection')[1][0]).toEqual('charmander');
    expect(wrapper.emitted('selection')[2][0]).toEqual('venusaur');
    expect(wrapper.emitted('selection')[3][0]).toBe('mew');
  });
});
