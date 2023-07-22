/* eslint-disable react/prop-types */
import Layout from "../layout/Layout";
import "./Pagination.css";

const Pagination = ({
  storiesPerPage,
  totalStories,
  paginate,
  currentPage,
}) => {
  const nums = [];

  for (let i = 1; i <= Math.ceil(totalStories / storiesPerPage); i++) {
    nums.push(i);
  }

  return (
    <Layout>
      <div className="pagination">
        <ul className="pagination__list">
          {nums.map((num, idx) => (
            <li
              className={
                num === currentPage
                  ? "pagination__item active"
                  : "pagination__item"
              }
              key={idx}
              onClick={() => paginate(num)}
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Pagination;
