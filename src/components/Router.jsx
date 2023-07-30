import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home-page/HomePage";
import NewsDetail from "./screens/news-page/news-detail/NewsDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoriesIds, getStories } from "./services/api";

const Router = () => {
  const dispatch = useDispatch();
  const storiesIds = useSelector((state) => state.stories.storiesId);

  useEffect(() => {
    dispatch(getStoriesIds());
    setInterval(() => {
      dispatch(getStoriesIds());
    }, 60000);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStories(storiesIds));
  }, [storiesIds, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NewsDetail />} path="/news-detail/:id" />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
