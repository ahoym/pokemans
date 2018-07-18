import { connect } from 'react-redux';
import {
  getPokedexById,
  getPokedexErrorsById,
  getIsPokedexFetching,
  fetchPokedex,
} from 'src/modules/pokedex/pokedex';
import Pokedex from './Pokedex';

function mapStateToProps(state, ownProps) {
  const selectorProps = { id: ownProps.id };

  return {
    errors: getPokedexErrorsById(state, selectorProps),
    isFetching: getIsPokedexFetching(state, selectorProps),
    nationalPokedex: getPokedexById(state, selectorProps),
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchPokedex: id => dispatch(fetchPokedex({ id: id || ownProps.id })),
  };
}

export const PokedexConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default PokedexConnector(Pokedex);
