// src/redux/sagas.js
import { takeLatest, put, call, delay } from "redux-saga/effects";
import axios from "axios";
import { fetchDataSuccess, fetchDataFailure } from "./actions";

function* fetchDataSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    const rendomDelay = Math.floor(Math.random() * (6000 - 1000 + 1) + 1000);
    yield call(delay, rendomDelay);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

function* rootSaga() {
  yield takeLatest("FETCH_DATA_REQUEST", fetchDataSaga);
}

export default rootSaga;
