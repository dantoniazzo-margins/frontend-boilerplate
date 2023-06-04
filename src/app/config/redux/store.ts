import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalReducer';
import allUsersReducer from '@/widgets/UsersList/allUsers.reducer';
import userReducer from '@/entities/User/user.reducer';
import counterReducer from '@/pages/Counter/counter.reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    counter: counterReducer,
    global: globalReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export const action = (type: string) => store.dispatch({ type });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
