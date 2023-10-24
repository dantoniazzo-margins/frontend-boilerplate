import { type ConfigureStoreOptions } from "@reduxjs/toolkit";
import { baseApi } from "shared/api";

import { sessionReducer } from "entities/session";
import { userReducer } from "entities/user";

export const rootReducer: ConfigureStoreOptions["reducer"] = {
  [baseApi.reducerPath]: baseApi.reducer,
  session: sessionReducer,
  user: userReducer,
};
