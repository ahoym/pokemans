import capitalize from 'lodash.capitalize';
import React, { Component } from 'react';
import { css } from 'react-emotion';
import { Button, Heading, Spacer, Spinner } from 'src/libraries/legos';
import { generateFadeInAnimation } from 'src/libraries/legos/common-styles/animations';

const minHeight = css`
  min-height: 5rem;
`;
const fadeIn = css`
  animation: 2s ${generateFadeInAnimation()};
`;

function SpritesList({ sprites }) {
  const imageKeys = Object.keys(sprites).filter(key => !!sprites[key]);

  return (
    <div className={minHeight}>
      {imageKeys.map(imageKey => (
        <span className={fadeIn} key={imageKey}>
          <img src={sprites[imageKey]} alt={imageKey} />
        </span>
      ))}
    </div>
  );
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
      content = <Button onClick={this.handleClick}>See Sprites!</Button>;
    }

    return (
      <div>
        <Spacer size="lg" />

        <Heading level="3">{capitalize(pokemonSpeciesName)}</Heading>
        <Spacer size="m" />
        {content}

        <Spacer size="lg" />
      </div>
    );
  }
}

export default PokemonViewer;
