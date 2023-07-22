import Header from "../../header/Header";
import NewsList from "./news-list/NewsList";
import styles from "./HomePage.module.scss";
import { useSelector } from "react-redux";

export default function Home() {
  const stories = useSelector((state) => state.stories.stories);
  const isLoading = useSelector((state) => state.stories.isLoading);

  return (
    <>
      <Header />
      {!isLoading ? (
        <NewsList stories={stories} />
      ) : (
        <div className={styles.loading}></div>
      )}
    </>
  );
}
