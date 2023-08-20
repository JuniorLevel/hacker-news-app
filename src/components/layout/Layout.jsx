import styles from "./Layout.module.scss";
// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
