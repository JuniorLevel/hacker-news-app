const defaultState = {
  stories: [],
  isLoading: true,
};

const ADD_STORIES = "ADD_STORIES";
const SET_LOADING = "SET_LOADING";

const storiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ADD_STORIES:
      return {
        ...state,
        stories: [
          ...state.stories
            .sort((a, b) => b.time - a.time)
            .filter((story) => story.id !== action.payload.id),
          action.payload,
        ],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default storiesReducer;

export const addStoriesAction = (payload) => {
  return {
    type: ADD_STORIES,
    payload,
  };
};

export const setIsLoadingAction = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};
