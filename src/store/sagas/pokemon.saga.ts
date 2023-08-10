import { put, takeEvery, select } from 'redux-saga/effects';

import { fetchPokemonByName, PokemonByNameResp } from '../../api';

import { setDetails } from '../reducers/pokemon';
import { selectSearch } from '../reducers/pokemon/pokemon.selectors';

function* workFetchByName() {
  try {
    const searchName: string = yield select(selectSearch);

    const pokemonResp: PokemonByNameResp = yield fetchPokemonByName(searchName);

    yield put(setDetails(pokemonResp));
  } catch (err: unknown) {
    yield console.log(err);
  }
}

function* pokemonSaga() {
  yield takeEvery('pokemon/fetchByName', workFetchByName);
}

export default pokemonSaga;
