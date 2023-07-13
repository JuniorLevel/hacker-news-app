import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home-page/HomePage";
import NewsDetail from "./screens/news-page/news-detail/NewsDetail";
import { useEffect } from "react";
import getStories from "./services/getStories";
import { useDispatch } from "react-redux";
const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStories());
    setInterval(() => {
      dispatch(getStories());
    }, 60000);
  }, [dispatch]);

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
