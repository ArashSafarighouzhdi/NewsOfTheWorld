import styles from "./breaking-news.module.css";
import { articles } from "../../data/data";

const BreakingNews = () => {
  const breakingList = articles.slice(-4);
  return (
    <div className={styles.breakingTitle}>
      <span className={styles.highlight}>Breaking News</span>
      <div className={styles.ticker}>
        <div className={styles.newsWrapper}>
          {breakingList.map((articles, index) => (
            <span key={index} className={styles.news}>
              {articles.headline} <span className={styles.arrow}> &rarr; </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
