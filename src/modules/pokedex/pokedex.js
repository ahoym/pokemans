import {
  apiThunk,
  makeResourceReducer,
  makeResourceSelectors,
  resourceApiActionTypesFactory,
} from 'redesert';

const resource = 'pokedex';
const pokedexApiActionTypes = resourceApiActionTypesFactory(resource);

export function successNormalizer(response) {
  return {
    [response.id]: {
      id: response.id,
      name: response.name,
      pokemonEntries: response.pokemon_entries,
    },
  };
}

function makeNetworkRequest(endpoint) {
  return () => fetch(endpoint).then(response => response.json());
}

export const fetchPokedex = ({ id = 1, name = '' } = {}) =>
  apiThunk({
    baseActionType: pokedexApiActionTypes.FETCH,
    networkRequest: makeNetworkRequest(
      `https://pokeapi.co/api/v2/pokedex/${id}`
    ),
    successNormalizer,
  });

export const {
  getArePokedexEntitiesFetching,
  getPokedexEntities,
  getPokedexErrors,
} = makeResourceSelectors({ resource });

const pokedexReducer = makeResourceReducer({ resource });
export default pokedexReducer;
