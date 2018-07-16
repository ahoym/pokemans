import { combineReducers } from 'redux';

import pokedexReducer from './modules/pokedex/pokedex';
import pokemonReducer from './modules/pokemon/pokemon';

export default combineReducers({
  pokedex: pokedexReducer,
  pokemon: pokemonReducer,
});
