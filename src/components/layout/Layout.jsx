import PropTypes from 'prop-types';
import styles from './Layout.module.scss';

Layout.propTypes = {
  children: PropTypes.node,
};

export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
