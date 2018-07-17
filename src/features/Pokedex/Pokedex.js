import React, { Component } from 'react';
import { Alert, Spinner } from 'src/libraries/components';
import PokemonViewerContainer from './PokemonViewer/PokemonViewerContainer';

class Pokedex extends Component {
  componentDidMount() {
    const { fetchPokedex, isFetching, nationalPokedex } = this.props;
    if (!isFetching && nationalPokedex === undefined) fetchPokedex();
  }

  render() {
    const { errors, isFetching, nationalPokedex } = this.props;
    if (errors) return <Alert message="Something went wrong in Pokedex!" />;
    if (isFetching || nationalPokedex === undefined) return <Spinner />;

    return (
      <div>
        {nationalPokedex.pokemonEntries.map(entry => (
          <div key={entry.entryNumber}>
            <PokemonViewerContainer
              id={entry.entryNumber}
              pokemonSpeciesName={entry.pokemonSpecies.name}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Pokedex;
