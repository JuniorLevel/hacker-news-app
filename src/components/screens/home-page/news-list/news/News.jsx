import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import convertDate from '../../../../../utils/convertDate';
import styles from './News.module.scss';

News.propTypes = {
  story: PropTypes.object,
};

export default function News({ story }) {
  return (
    <>
      <li className={styles.news}>
        {story && (
          <>
            <div className={styles.news__top}>
              <Link to={`/news-detail/${story.id}`}>
                <h2 className={styles.news__title}>{story.title}</h2>
              </Link>
            </div>
            <div className={styles.news__info}>
              <span className={styles.news__infoRate}>
                {story.score} {story.score > 1 ? 'points' : 'point'}
              </span>
              <span className={styles.news__infoAuthor}>
                by <span className={styles.news__infoSpan}>{story.by}</span>
              </span>
              <span>{convertDate(story.time)}</span>
            </div>
          </>
        )}
        {!story && <div>No information</div>}
      </li>
      <hr></hr>
    </>
  );
}
