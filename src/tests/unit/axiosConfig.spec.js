import axiosConfig from '@/logic/api/axiosConfig.js';
import { it, expect } from 'vitest';

it("should match PokeApi's Base URL", () => {
  const expectedBaseURL = 'https://pokeapi.co/api/v2';
  expect(axiosConfig.defaults.baseURL).toBe(expectedBaseURL);
});
