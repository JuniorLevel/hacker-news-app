import {
	getStoriesAction,
	getStoriesIdsAction,
	setIsLoadingAction,
} from '../../store/storiesReducer';

import axios from 'axios';

const getStoriesIds = () => {
	return async function (dispatch) {
		try {
			dispatch(setIsLoadingAction(true));
			await axios
				.get('https://hacker-news.firebaseio.com/v0/newstories.json')
				.then(response =>
					dispatch(getStoriesIdsAction(response.data.slice(0, 100)))
				);
			throw new Error('Something was wrong!');
		} catch (err) {
			console.log(err);
		}
	};
};

const getStories = storiesIds => {
	return async function (dispatch) {
		try {
			dispatch(setIsLoadingAction(true));
			let stories = [];
			let story = [];
			storiesIds.map(async storyId => {
				story = await axios
					.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
					.then(story => story.data);
				stories.push(story);
				dispatch(getStoriesAction(stories));
			});
			throw new Error('Something was wrong!');
		} catch (err) {
			console.log(err);
		}
	};
};

export { getStories, getStoriesIds };
