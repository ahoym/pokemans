import React, { Component } from 'react';
import Spinner from 'src/libraries/components/Spinner';

function SpritesList({ sprites }) {
  const imageKeys = Object.keys(sprites).filter(key => !!sprites[key]);

  return imageKeys.map(imageKey => (
    <span key={imageKey}>
      <img src={sprites[imageKey]} alt={imageKey} />
    </span>
  ));
}

class PokemonViewer extends Component {
  handleClick = () => {
    const { fetchPokemon, id, pokemonSpeciesName } = this.props;
    fetchPokemon({ id, name: pokemonSpeciesName });
  };

  render() {
    const { isFetching, pokemon, pokemonSpeciesName } = this.props;
    let content;

    if (isFetching) {
      content = <Spinner />;
    } else if (pokemon && pokemon.sprites) {
      content = <SpritesList sprites={pokemon.sprites} />;
    } else {
      content = <button onClick={this.handleClick}>See Sprites!</button>;
    }

    return (
      <div>
        <h3>{pokemonSpeciesName}</h3>
        {content}
      </div>
    );
  }
}

export default PokemonViewer;
