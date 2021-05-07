const reducer = (state = { isFocused: false }, action) => {
  switch (action.type) {
    case "input_focus":
      return { isFocused: true };
    case "input_blur":
      return { isFocused: false };
    default:
      return state;
  }
};
export default reducer;
