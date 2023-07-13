import { addStoriesAction } from "../../store/storiesReducer";
import axios from "axios";

const getStories = () => {
  return async function (dispatch) {
    // axios
    //   .get("https://hacker-news.firebaseio.com/v0/topstories.json")
    //   .then((response) => {
    //     let storiesId = response.data.slice(0, 30);
    //     storiesId.map((storyId) => {
    //       axios
    //         .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
    //         .then((story) => {
    //           dispatch(addStoriesAction(story.data));
    //         });
    //     });
    //   });));

    const storiesId = await axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => response.data.slice(0, 10));

    const getStories = (storiesId) =>
      storiesId.map(
        async (story) =>
          await axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
            .then((story) => dispatch(addStoriesAction(story.data)))
      );

    getStories(storiesId);
  };
};

export default getStories;
