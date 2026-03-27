import styles from "./article-list.module.css";
import { articles } from "../../data/data";

const ArticleList = ({ category, setArticle }) => {

  const filteredArticles = articles.filter(
    (article) => article.category === category
  );

  return (
    <div className={styles.articleList}>

      <h1>{category}</h1>

      {filteredArticles.map((article) => (
        <div
          key={article.headline}
          className={styles.articleCard}
          onClick={() => setArticle(article.headline)}
        >
          <h3>{article.headline}</h3>
          <p>{article.deck}</p>
        </div>
      ))}

    </div>
  );
};

export default ArticleList;