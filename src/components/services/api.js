import {
  addStoriesAction,
  getStoriesIdAction,
} from "../../store/storiesReducer";
import { setIsLoadingAction } from "../../store/storiesReducer";
import axios from "axios";

const getStoriesIds = () => {
  return async function (dispatch) {
    dispatch(setIsLoadingAction(true));
    await axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then((response) =>
        dispatch(getStoriesIdAction(response.data.slice(0, 100)))
      );
    dispatch(setIsLoadingAction(false));
  };
};

const getStories = (storiesIds) => {
  return async function (dispatch) {
    dispatch(setIsLoadingAction(true));
    let stories = [];
    let story = [];
    storiesIds.map(async (storyId) => {
      story = await axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
        .then((story) => story.data);
      stories.push(story);
      dispatch(addStoriesAction(stories));
    });
    dispatch(setIsLoadingAction(false));
  };
};

export { getStoriesIds, getStories };
