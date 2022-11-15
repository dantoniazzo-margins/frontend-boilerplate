import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import globalReducer from "./reducers/globalReducer";
import loginReducer from "./reducers/loginReducer";
import userReducer from "./reducers/userReducer";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    global: globalReducer,
    login: loginReducer,
    user: userReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
