import { connect } from 'react-redux';
import {
  getPokemonById,
  getIsPokemonFetching,
  getPokemonErrorsById,
  fetchPokemon,
} from 'src/modules/pokemon/pokemon';
import PokemonViewer from './PokemonViewer';

function mapStateToProps(state, ownProps) {
  const selectorProps = { id: ownProps.id };

  return {
    pokemon: getPokemonById(state, selectorProps),
    isFetching: getIsPokemonFetching(state, selectorProps),
    errors: getPokemonErrorsById(state, selectorProps),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPokemon: props => dispatch(fetchPokemon(props)),
  };
}

const PokemonViewerConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default PokemonViewerConnector(PokemonViewer);
