const initialState = {
  data: [],
  loading: false,
  error: "",
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "FATCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FATCH_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FATCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
