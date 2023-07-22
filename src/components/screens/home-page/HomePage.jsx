import Header from "../../header/Header";
import NewsList from "./news-list/NewsList";
import styles from "./HomePage.module.scss";
import { useSelector } from "react-redux";
import Pagination from "../../pagination/Pagination";
import { useState } from "react";

export default function Home() {
  const stories = useSelector((state) => state.stories.stories);
  const isLoading = useSelector((state) => state.stories.isLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage] = useState(10);

  const lastStoriesIndex = currentPage * storiesPerPage;
  const firstStoriesIndex = lastStoriesIndex - storiesPerPage;
  const currentStories = stories.slice(firstStoriesIndex, lastStoriesIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      {!isLoading ? (
        <>
          <NewsList stories={currentStories} />
          <Pagination
            storiesPerPage={storiesPerPage}
            totalStories={stories.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      ) : (
        <div className={styles.loading}></div>
      )}
    </>
  );
}
