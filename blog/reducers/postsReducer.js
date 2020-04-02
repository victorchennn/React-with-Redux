export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

// must return something, not undefined
// only use input parameters (previous state + action)
// not mutate state?
