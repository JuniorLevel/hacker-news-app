import PropTypes from 'prop-types';
import styles from './PaginationButtons.module.scss';

PaginationButtons.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  totalStories: PropTypes.number,
  storiesPerPage: PropTypes.number,
  stories: PropTypes.array,
};

export default function PaginationButtons({
  currentPage,
  setCurrentPage,
  totalStories,
  storiesPerPage,
  stories,
}) {
  return (
    stories.length && (
      <div className={styles.paginationButtons}>
        {currentPage === 1 && (
          <button
            className={styles.paginationButtons__next}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            next
          </button>
        )}
        {currentPage !== totalStories / storiesPerPage && currentPage !== 1 && (
          <>
            <button
              className={styles.paginationButtons__prev}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              prev
            </button>
            <button
              className={styles.paginationButtons__next}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              next
            </button>
          </>
        )}
        {currentPage === totalStories / storiesPerPage && (
          <button
            className={styles.paginationButtons__prev}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            prev
          </button>
        )}
      </div>
    )
  );
}
