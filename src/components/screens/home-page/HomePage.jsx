import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../header/Header';
import Pagination from '../../pagination/Pagination';
import PaginationButtons from '../../pagination/pagination-buttons/PaginationButtons';
import styles from './HomePage.module.scss';
import NewsList from './news-list/NewsList';

export default function Home() {
  let stories = useSelector(state => state.stories.stories);
  const currentTheme = useSelector(state => state.theme.currentTheme);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    }
    localStorage.setItem('theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const isLoading = useSelector(state => state.stories.isLoading);

  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = useMemo(() => 10, []);
  const lastStoriesIndex = currentPage * storiesPerPage;
  const firstStoriesIndex = lastStoriesIndex - storiesPerPage;

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      {isLoading && <div className={styles.loading}></div>}
      {!isLoading && (
        <>
          <NewsList
            stories={stories}
            firstStoriesIndex={firstStoriesIndex}
            lastStoriesIndex={lastStoriesIndex}
          />
          <Pagination
            storiesPerPage={storiesPerPage}
            totalStories={stories.length}
            paginate={paginate}
            currentPage={currentPage}
            stories={stories}
          />
          <PaginationButtons
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalStories={stories.length}
            storiesPerPage={storiesPerPage}
            stories={stories}
          />
        </>
      )}
    </>
  );
}
