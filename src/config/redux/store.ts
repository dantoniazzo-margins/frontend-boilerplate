import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";
import loginReducer from "../../modules/Login/login.reducer";
import userReducer from "../../modules/Dashboard/user.reducer";
import createSagaMiddleware from "@redux-saga/core";
import { helloSaga } from "./sagas/userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    global: globalReducer,
    login: loginReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(helloSaga);

export const action = (type: typeof store.dispatch) => store.dispatch({ type });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
