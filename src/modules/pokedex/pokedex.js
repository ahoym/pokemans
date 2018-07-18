import camelize from 'camelize';
import {
  apiThunk,
  makeResourceReducer,
  makeResourceSelectors,
  resourceApiActionTypesFactory,
} from 'redesert';
import { wrappedRequest } from 'src/utils/makeRequest';

const resource = 'pokedex';
const pokedexApiActionTypes = resourceApiActionTypesFactory(resource);

export const fetchPokedex = ({ id, name }) =>
  apiThunk({
    baseActionType: pokedexApiActionTypes.FETCH,
    meta: { referenceId: id },
    networkRequest: wrappedRequest({
      endpoint: `https://pokeapi.co/api/v2/pokedex/${id || name}`,
    }),
    successNormalizer: response => camelize(response),
  });

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
