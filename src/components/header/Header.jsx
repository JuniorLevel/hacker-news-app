import { LuRefreshCcw } from 'react-icons/lu';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { TiArrowBackOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { setTheme } from '../../store/themeReducer';
import Layout from '../layout/Layout';
import { getStoriesIds } from '../services/api';
import styles from './Header.module.scss';
export default function Header() {
  const currentTheme = useSelector(state => state.theme.currentTheme);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Layout>
          <span className={styles.headerTop__text}>
            No one of the system are unsafe
          </span>
        </Layout>
      </div>
      <div className={styles.headerMain}>
        <Layout>
          <div className={styles.headerPanel}>
            <h1 className={styles.headerPanel__title}>The Hacker News</h1>
            <div className={styles.headerPanel__buttons}>
              {location.pathname !== '/' ? (
                <Link to={'/'}>
                  <button>
                    <TiArrowBackOutline size={50} />
                  </button>
                </Link>
              ) : (
                <button onClick={() => dispatch(getStoriesIds())}>
                  <LuRefreshCcw size={50} />
                </button>
              )}
              {location.pathname === '/' && (
                <button
                  onClick={() => {
                    dispatch(
                      setTheme(currentTheme === 'light' ? 'dark' : 'light'),
                    );
                    localStorage.setItem('theme', currentTheme);
                    document.documentElement.setAttribute(
                      'data-theme',
                      currentTheme,
                    );
                  }}
                >
                  {currentTheme === 'light' && <MdOutlineDarkMode size={50} />}
                  {currentTheme === 'dark' && <MdOutlineLightMode size={50} />}
                </button>
              )}
            </div>
          </div>
        </Layout>
      </div>
    </header>
  );
}
