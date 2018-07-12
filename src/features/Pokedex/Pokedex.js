import React, { Component } from 'react';

function Spinner() {
  return <h2>Loading...</h2>;
}

function Body({ errors, isFetching, pokedexes }) {
  if (errors) return <h2>Something went wrong</h2>;
  if (isFetching || Object.keys(pokedexes).length === 0) return <Spinner />;

  return (
    <div>
      <h2>yo it worked</h2>
      {pokedexes['1'].pokemonEntries.map(entry => (
        <div key={entry.entry_number}>
          <h3>{entry.pokemon_species.name}</h3>
          <h3>{entry.pokemon_species.url}</h3>
        </div>
      ))}
    </div>
  );
}

class Pokedex extends Component {
  componentDidMount() {
    const { fetchPokedex, isFetching, pokedexes } = this.props;
    if (Object.keys(pokedexes).length === 0 && !isFetching) fetchPokedex();
  }

  render() {
    const { errors, isFetching, pokedexes } = this.props;

    console.log('sadfasf', this.props);

    return (
      <div>
        <h1>This is a Pokedex</h1>
        <Body isFetching={isFetching} errors={errors} pokedexes={pokedexes} />
      </div>
    );
  }
}

export default Pokedex;
