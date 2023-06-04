import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";
import loginReducer from "../../modules/Login/login.reducer";
import allUsersReducer from "@/modules/Users/allUsers.reducer";
import userReducer from "../../modules/Dashboard/user.reducer";
import counterReducer from "../../features/Counter/counter.reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    counter: counterReducer,
    global: globalReducer,
    login: loginReducer,
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
