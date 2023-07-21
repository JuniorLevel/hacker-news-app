import Header from "../../header/Header";
import NewsList from "./news-list/NewsList";
import styles from "./HomePage.module.scss";
import { useSelector } from "react-redux";

export default function Home() {
  const stories = useSelector((state) => state.stories.stories);

  return (
    <>
      <Header />
      <NewsList stories={stories} />
      {/* <div className={styles.loading}></div> */}
    </>
  );
}
