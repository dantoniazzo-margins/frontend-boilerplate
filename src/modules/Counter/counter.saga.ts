import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  take,
} from "redux-saga/effects";
import { incrementCounter, decrementCounter } from "./counter.reducer";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put(incrementCounter(5));
}

export function* increment() {
  yield put(incrementCounter(5));
}

export function* decrement() {
  yield put(decrementCounter(5));
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* watchIncrement() {
  yield takeEvery("INCREMENT", increment);
}

export function* watchDecrement() {
  yield takeEvery("DECREMENT", decrement);
}

/* export function* fetchUser(action) {
    try {
      yield call(Login);
      yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    } catch (e) {
      yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
  } */

/* export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchUser);
  } */
