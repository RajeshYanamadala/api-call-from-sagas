import "./App.css";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./sagas/actions";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data);
  const getFetchData = () => {
    dispatch(fetchDataRequest());
  };

  return (
    <div className="App">
      <button onClick={getFetchData}>Click Me</button>
    </div>
  );
}

export default App;
