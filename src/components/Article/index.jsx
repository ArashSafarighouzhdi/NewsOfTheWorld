import styles from "./article.module.css";
import { getImageURL } from "../../utils/functions";
import { articles } from "../../data/data";

const Article = ({ articleHeadline, setArticle }) => {
  const articleData = articles.find((a) => a.headline === articleHeadline);
  return (
    <div className={styles.mid_section}>
      <img className={styles.article_news_img} src={getImageURL(articleData.image)} />
      <h3 className={styles.article_news_title}> {articleData.headline}</h3>
      <h4 className={styles.article_news_news}>{articleData.deck}</h4>
      <p className={styles.article_news_news}>{articleData.story}</p>
      <p className={styles.article_news_category}>{articleData.category}</p>
      <button
        onClick={() => {
          setArticle(null);
        }}
      >
        Back
      </button>
    </div>
  );
};
export default Article;
