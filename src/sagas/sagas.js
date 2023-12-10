import { takeLatest, put, call } from "redux-saga/effects";

import {
  FETCH_DATA_REQUEST,
  fetchDataSuccess,
  fetchDataFailure,
} from "./actions";

const getFetchDataFromApi = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

function* fetchData() {
  try {
    yield put({ type: FETCH_DATA_REQUEST });
    const data = yield call(getFetchDataFromApi);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

function* rootSagas() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default rootSagas;
