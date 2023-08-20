const defaultState = {
	storiesIds: [],
	stories: [],
	isLoading: true,
};

const GET_STORIES_IDS = 'GET_STORIES_IDS';
const GET_STORIES = 'GET_STORIES';
const SET_LOADING = 'SET_LOADING';

const storiesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case GET_STORIES_IDS:
			return {
				...state,
				storiesIds: [...action.payload],
				isLoading: false,
			};
		case GET_STORIES:
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

export const getStoriesIdsAction = payload => {
	return {
		type: GET_STORIES_IDS,
		payload,
	};
};

export const getStoriesAction = payload => {
	return {
		type: GET_STORIES,
		payload,
	};
};

export const setIsLoadingAction = payload => {
	return {
		type: SET_LOADING,
		payload,
	};
};
