import {
  apiThunk,
  makeResourceReducer,
  makeResourceSelectors,
  resourceApiActionTypesFactory,
} from 'redesert';
import { successNormalizer, wrappedRequest } from 'src/utils/makeRequest';

const resource = 'pokemon';
const pokemonApiActionTypes = resourceApiActionTypesFactory(resource);

export function fetchPokemon({ id, name }) {
  return apiThunk({
    baseActionType: pokemonApiActionTypes.FETCH,
    meta: { referenceId: id },
    networkRequest: wrappedRequest({
      endpoint: `https://pokeapi.co/api/v2/pokemon/${id || name}`,
    }),
    successNormalizer,
  });
}

export const {
  getPokemonById,
  getIsPokemonFetching,
  getPokemonErrorsById,
} = makeResourceSelectors({ resource });

const pokemonReducer = makeResourceReducer({ resource });
export default pokemonReducer;
