import styles from "./recent-news.module.css";
import { articles } from "../../data/data";
import RecentCard from "../RecentCard";

const RecentNews = ({ setArticle }) => {
  const categories = [...new Set(articles.map((a) => a.category))].filter((c) => c !== "sport");
  const recentNews = categories
    .map((cat) => {
      const categoryArticles = articles.filter((a) => a.category === cat);
      return categoryArticles[Math.floor(Math.random() * categoryArticles.length)];
    })
    .slice(0, 4);
  return (
    <div className={styles.recent_news_section}>
      <span className={styles.highlight}>Recent News</span>

      <div>
        {recentNews.map((articles, index) => (
          <RecentCard key={index} {...articles} setArticle={setArticle} />
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
