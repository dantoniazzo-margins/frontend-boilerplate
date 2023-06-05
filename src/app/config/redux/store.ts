import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalReducer';
import allUsersReducer from '@/features/usersList/model/allUsers.reducer';
import userReducer from '@/entities/user/model/stores/user.reducer';
import counterReducer from '@/features/counter/model/counter.reducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import viewerReducer from '@/entities/viewer/model/stores/viewer.reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    allUsersSlice: allUsersReducer,
    counterSlice: counterReducer,
    globalSlice: globalReducer,
    userSlice: userReducer,
    viewerSlice: viewerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export const action = (type: string) => store.dispatch({ type });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
