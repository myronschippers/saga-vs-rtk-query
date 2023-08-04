import { combineReducers } from 'redux';

import { counterReducer } from './counter';
import { pokemonReducer } from './pokemon';

const rootReducer = combineReducers({
  counter: counterReducer,
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
