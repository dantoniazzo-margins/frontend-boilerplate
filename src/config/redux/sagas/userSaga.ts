import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { sagaActions } from "../sagaActions/sagaActions";
import { Login } from "services/API/Login";

export function* fetchUser(action) {
  try {
    const user = yield call(Login);
    yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchUser);
}
