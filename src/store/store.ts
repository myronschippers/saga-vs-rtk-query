import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// For RTK Query
import { setupListeners } from '@reduxjs/toolkit/query';

import { pokemonApi } from './services/pokemon';
import rootReducer from './reducers/_root.reducer';
import rootSaga from './sagas/_root.saga';

const sagaMiddleware = createSagaMiddleware();
const middlewareList = [logger, pokemonApi.middleware, sagaMiddleware];

// reducers and sagas

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const finalMiddleware = getDefaultMiddleware().concat(middlewareList);

    return finalMiddleware;
  },
});

sagaMiddleware.run(rootSaga);
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootStateType = ReturnType<typeof store.getState>;

export const RootState = store.getState();

export default store;
