import React, { Component } from 'react';
import { Alert, Spinner } from 'src/libraries/legos';
import PokemonViewerContainer from './PokemonViewer/PokemonViewerContainer';
import Search from './Search/Search';

class Pokedex extends Component {
  state = {
    currentSearchTerm: '',
  };

  componentDidMount() {
    const { fetchPokedex, isFetching, nationalPokedex } = this.props;
    if (!isFetching && nationalPokedex === undefined) fetchPokedex();
  }

  onSearchSubmit = ({ currentPokemon }) => {
    this.setState({ currentSearchTerm: currentPokemon });
  };

  filteredPokemonEntries = () => {
    const { nationalPokedex } = this.props;
    const { currentSearchTerm } = this.state;
    let entries;

    if (currentSearchTerm === '') {
      entries = nationalPokedex.pokemonEntries;
    } else {
      entries = nationalPokedex.pokemonEntries.filter(entry =>
        entry.pokemonSpecies.name.includes(currentSearchTerm)
      );
    }

    return entries || [];
  };

  render() {
    const { errors, isFetching, nationalPokedex } = this.props;
    if (errors) return <Alert message="Something went wrong in Pokedex!" />;
    if (isFetching || nationalPokedex === undefined) return <Spinner />;

    return (
      <div>
        <Search
          onSubmit={this.onSearchSubmit}
          hasSearchTerm={!!this.state.currentSearchTerm}
        />

        {this.filteredPokemonEntries().map(
          ({ entryNumber, pokemonSpecies }) => (
            <PokemonViewerContainer
              key={entryNumber}
              id={entryNumber}
              pokemonSpeciesName={pokemonSpecies.name}
            />
          )
        )}
      </div>
    );
  }
}

export default Pokedex;
