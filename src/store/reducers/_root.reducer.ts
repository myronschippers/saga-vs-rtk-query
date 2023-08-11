import { combineReducers } from 'redux';

import rootApiReducer from '../api/_root.api';
import { counterReducer } from './counter';
import { pokemonReducer } from './pokemon';

const rootReducer = combineReducers({
  ...rootApiReducer,
  counter: counterReducer,
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
