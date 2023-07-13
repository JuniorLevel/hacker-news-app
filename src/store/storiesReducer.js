const defaultState = {
  stories: [],
};

const ADD_STORIES = "ADD_STORIES";

const storiesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_STORIES:
      return {
        ...state,
        stories: [
          ...state.stories
            .sort((a, b) => b.time - a.time)
            .filter((story) => story.id !== action.payload.id),
          action.payload,
        ],
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
