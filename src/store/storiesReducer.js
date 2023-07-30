const defaultState = {
  storiesId: [],
  stories: [],
  isLoading: true,
};

const GET_STORIES_ID = "GET_STORIES_ID";
const ADD_STORIES = "ADD_STORIES";
const SET_LOADING = "SET_LOADING";

const storiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_STORIES_ID:
      return {
        ...state,
        storiesId: [...action.payload],
        isLoading: false,
      };
    case ADD_STORIES:
      return {
        ...state,
        stories: [...action.payload],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default storiesReducer;

export const getStoriesIdAction = (payload) => {
  return {
    type: GET_STORIES_ID,
    payload,
  };
};

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
