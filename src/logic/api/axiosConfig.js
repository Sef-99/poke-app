'use strict';

import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

const pokeAPI = axios.create({
  baseURL: BASE_URL,
});

export default pokeAPI;
