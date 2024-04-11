import { shallowMount } from '@vue/test-utils';
import { expect, describe, it } from 'vitest';
import PokemonPicture from '@/components/PokemonPictures.vue';

describe('PokemonPicture component related tests', () => {
  it('should match snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        hasGuessed: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should show only the silouette image', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        hasGuessed: false,
      },
    });

    const listOfImgs = wrapper.findAll('img');
    console.log(listOfImgs);

    expect(listOfImgs).toHaveLength(1);
    expect(listOfImgs[0].classes('hidden-pokemon')).toBeTruthy();
  });

  it('should display the pokemon with id 200', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 200,
        hasGuessed: false,
      },
    });

    const expectedScr =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/200.svg';

    const [pokemonImage] = wrapper.findAll('img');
    expect(pokemonImage.attributes('src')).toEqual(expectedScr);
  });

  it('should display the answer when showPokemon is true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 200,
        hasGuessed: true,
      },
    });

    const [hiddenImage, answerImage] = wrapper.findAll('img');
    console.log(answerImage.classes());
    expect(answerImage.classes('fade-in')).toBeTruthy();
    expect(answerImage.attributes('alt')).toEqual('Pokemon Picture Answer');
  });
});
