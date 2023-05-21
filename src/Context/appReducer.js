export const initalState = {
  basket: [],
  user: null,
};
function appReducer(state = initalState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default appReducer;
