import { connect } from 'react-redux';

import {
  getArePokedexEntitiesFetching,
  getPokedexEntities,
  getPokedexErrors,
  fetchPokedex,
} from 'src/modules/pokedex/pokedex';

import Pokedex from './Pokedex';

function mapStateToProps(state) {
  return {
    errors: getPokedexErrors(state),
    isFetching: getArePokedexEntitiesFetching(state),
    pokedexes: getPokedexEntities(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokedex: () => dispatch(fetchPokedex()),
  };
}

export const PokedexConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default PokedexConnector(Pokedex);
