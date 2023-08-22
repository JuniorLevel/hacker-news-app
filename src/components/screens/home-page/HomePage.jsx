import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../header/Header';
import Pagination from '../../pagination/Pagination';
import PaginationButtons from '../../pagination/pagination-buttons/PaginationButtons';
import styles from './HomePage.module.scss';
import NewsList from './news-list/NewsList';

export default function Home() {
	let stories = useSelector(state => state.stories.stories);
	const isLoading = useSelector(state => state.stories.isLoading);

	const [currentPage, setCurrentPage] = useState(1);
	const [storiesPerPage] = useState(10);
	const lastStoriesIndex = currentPage * storiesPerPage;
	const firstStoriesIndex = lastStoriesIndex - storiesPerPage;

	const currentStories = stories
		.slice(firstStoriesIndex, lastStoriesIndex)
		.sort((a, b) => b.time - a.time);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<>
			<Header />
			{!isLoading ? (
				<>
					<NewsList stories={currentStories} />
					{window.innerWidth > 750 ? (
						<Pagination
							storiesPerPage={storiesPerPage}
							totalStories={stories.length}
							paginate={paginate}
							currentPage={currentPage}
							stories={stories}
						/>
					) : (
						<PaginationButtons
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalStories={stories.length}
							storiesPerPage={storiesPerPage}
							stories={stories}
						/>
					)}
				</>
			) : (
				<div className={styles.loading}></div>
			)}
		</>
	);
}
