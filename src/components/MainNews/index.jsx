import { articles } from "../../data/data";
import { getImageURL } from "../../utils/functions";
import styles from "./main-news.module.css";

const MainNews = ({ setArticle }) => {
  const randomNews = articles[Math.floor(Math.random() * articles.length)];

  return (
    <div className={styles.mid_section} onClick={() => setArticle(randomNews.headline)}>
      <img className={styles.main_news_img} src={getImageURL(randomNews.image)} />
      <h3 className={styles.main_news_title}>In Focus: {randomNews.headline}</h3>
      <p className={styles.main_news_news}>{randomNews.deck}</p>
      <p className={styles.main_news_category}>{randomNews.category}</p>
    </div>
  );
};

export default MainNews;
