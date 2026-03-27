import styles from "./news-section.module.css";
import CardNews from "../CardNews";
import { articles } from "../../data/data";

const NewsSection = ({ categoryType , setArticle}) => {
  const category = articles.filter((c) => c.category === categoryType);
  const randomThree = category.sort(() => 0.5 - Math.random()).slice(0, 3);
  return (
    <div>
      <div className={styles.newssection_title}>{categoryType.toUpperCase()}</div>
      <div className={styles.newssection}>
        {randomThree.map((articles, index) => (
          <CardNews key={index} {...articles} setArticle={setArticle}/>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
