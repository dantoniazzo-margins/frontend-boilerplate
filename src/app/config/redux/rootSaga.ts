import { all } from 'redux-saga/effects';
import {
  watchIncrementAsync,
  watchIncrement,
  watchDecrement,
} from '@/pages/Counter/counter.saga';
import { watchFetchUsers } from '@/widgets/UsersList/users.saga';

export default function* rootSaga() {
  yield all([
    watchIncrement(),
    watchDecrement(),
    watchIncrementAsync(),
    watchFetchUsers(),
  ]);
}
