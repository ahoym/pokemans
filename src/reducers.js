import { combineReducers } from 'redux';

import pokedexReducer from './modules/pokedex/pokedex';
import pokemonReducer from './modules/pokemon/pokemon';
import themeReducer from './modules/theme/theme';

const uiReducers = combineReducers({
  theme: themeReducer,
});

export default combineReducers({
  pokedex: pokedexReducer,
  pokemon: pokemonReducer,
  ui: uiReducers,
});
