import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas/sagas";
import rootReducer from "./sagas/reducer";
const sagasMiddleware = createSagaMiddleware();

const store = createStore(
  { data: rootReducer },
  applyMiddleware(sagasMiddleware)
);

sagasMiddleware.run(rootSagas);

export default store;
