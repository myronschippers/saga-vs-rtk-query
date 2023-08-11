import { combineReducers } from 'redux';

import rootApiReducer from '../api/_root.api';
import { pokemonReducer } from './pokemon';

const rootReducer = combineReducers({
  ...rootApiReducer,
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
