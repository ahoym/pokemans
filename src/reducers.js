import { combineReducers } from 'redux';

import pokedexReducer from './modules/pokedex/pokedex';

export default combineReducers({
  pokedex: pokedexReducer,
});
