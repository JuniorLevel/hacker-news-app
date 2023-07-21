const defaultState = {
  isLightTheme: true,
};

const SET_THEME = "SET_THEME";

const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        isLightTheme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;

export const setTheme = (payload) => {
  return {
    type: SET_THEME,
    payload,
  };
};
