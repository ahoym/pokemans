import {
  apiThunk,
  makeResourceReducer,
  makeResourceSelectors,
  resourceApiActionTypesFactory,
} from 'redesert';
import { successNormalizer, wrappedRequest } from 'src/utils/makeRequest';

const resource = 'pokedex';
const pokedexApiActionTypes = resourceApiActionTypesFactory(resource);

export function fetchPokedex({ id, name }) {
  return apiThunk({
    baseActionType: pokedexApiActionTypes.FETCH,
    meta: { referenceId: id },
    networkRequest: wrappedRequest({
      endpoint: `https://pokeapi.co/api/v2/pokedex/${id || name}`,
    }),
    successNormalizer,
  });
}

export const {
  getArePokedexEntitiesFetching,
  getIsPokedexFetching,
  getPokedexById,
  getPokedexEntities,
  getPokedexErrors,
  getPokedexErrorsById,
} = makeResourceSelectors({ resource });

const pokedexReducer = makeResourceReducer({ resource });
export default pokedexReducer;
