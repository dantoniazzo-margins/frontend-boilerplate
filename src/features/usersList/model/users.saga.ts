import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { setUsers, setFailure } from './allUsers.reducer';

interface axiosProps {
  url: string;
  method?: string;
  data?: string;
}

let callAPI = async ({ url, method, data }: axiosProps) => {
  return await axios({
    url,
    method,
    data,
  });
};

export function* fetchUsers() {
  try {
    const result: AxiosResponse<any> = yield call(() =>
      callAPI({ url: 'https://jsonplaceholder.typicode.com/users' })
    );
    yield put(setUsers(result));
  } catch (e: any) {
    yield put(setFailure(e.message));
    /*  yield put({ type: "TODO_FETCH_FAILED" }); */
  }
}

export function* watchFetchUsers() {
  yield takeEvery('FETCH_USERS', fetchUsers);
}
