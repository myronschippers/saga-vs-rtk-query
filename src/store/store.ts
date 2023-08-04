import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/_root.reducer';
// import rootSaga from './sagas/_root.saga';

// const sagaMiddleware = createSagaMiddleware();
const middlewareList = [
  // sagaMiddleware,
  logger,
];

// reducers and sagas

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middlewareList,
  ],
});

// sagaMiddleware.run(rootSaga);

export type RootStateType = ReturnType<typeof store.getState>;

export const RootState = store.getState();

export default store;
