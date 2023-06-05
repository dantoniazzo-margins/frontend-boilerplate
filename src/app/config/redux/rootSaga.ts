import { all } from 'redux-saga/effects';
import {
  watchIncrementAsync,
  watchIncrement,
  watchDecrement,
} from '@/features/counter/counter.saga';
import { watchFetchUsers } from '@/widgets/UsersList/users.saga';

export default function* rootSaga() {
  yield all([
    watchIncrement(),
    watchDecrement(),
    watchIncrementAsync(),
    watchFetchUsers(),
  ]);
}
