import { addStoriesAction } from "../../store/storiesReducer";
import { setIsLoadingAction } from "../../store/storiesReducer";
import axios from "axios";

const getStories = () => {
  return async function (dispatch) {
    dispatch(setIsLoadingAction(true));
    const storiesId = await axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => response.data.slice(0, 100));

    const getStories = (storiesId) => {
      storiesId.map(
        async (story) =>
          await axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
            .then((story) => dispatch(addStoriesAction(story.data)))
      );
    };

    getStories(storiesId);
  };
};
export default getStories;
