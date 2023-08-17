/* eslint-disable react/prop-types */
import styles from "./PaginationButtons.module.scss";

export default function PaginationButtons({
  currentPage,
  setCurrentPage,
  totalStories,
  storiesPerPage,
}) {
  return (
    <div className={styles.paginationButtons}>
      {currentPage === 1 ? (
        <button
          className={styles.paginationButtons__next}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          next
        </button>
      ) : currentPage !== totalStories / storiesPerPage ? (
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
      ) : (
        <button
          className={styles.paginationButtons__prev}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          prev
        </button>
      )}
    </div>
  );
}
