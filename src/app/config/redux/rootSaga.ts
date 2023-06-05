import { all } from 'redux-saga/effects';
import {
  watchIncrementAsync,
  watchIncrement,
  watchDecrement,
} from '@/features/counter/model/counter.saga';
import { watchFetchUsers } from '@/features/usersList/model/users.saga';

export default function* rootSaga() {
  yield all([
    watchIncrement(),
    watchDecrement(),
    watchIncrementAsync(),
    watchFetchUsers(),
  ]);
}
