// src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./redux/actions";
import { RotatingLines } from "react-loader-spinner";
import Skelton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [spinner, setSpinner] = useState(false);

  const totalUserInfo = data.length;

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  useEffect(() => {
    if (!totalUserInfo) {
      setTimeout(() => {
        setSpinner(true);
      }, 3000);
    }
  }, [spinner]);

  return (
    <div className="App">
      <h1>Data from API:</h1>
      {loading || !totalUserInfo ? (
        <div className="loader" data-cy="loader">
          {!spinner ? (
            <div data-cy="skelton-loader">
              <Skelton count={3} highlightColor="green" />
            </div>
          ) : (
            <div data-cy="spinner-loader">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                width="96"
                visible={true}
              />
            </div>
          )}
        </div>
      ) : (
        <ul data-cy="unorder-list-item">
          {data?.map((item) => (
            <li data-cy="list-item" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
