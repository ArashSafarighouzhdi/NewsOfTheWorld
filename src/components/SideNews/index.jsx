import styles from "./side-news.module.css";
import { articles } from "../../data/data";
import SideCard from "../SideCard";

const SideNews = ({setArticle}) => {
  const category = articles.filter((c) => c.category === "sport");

  const randomTwo = category.sort(() => 0.5 - Math.random()).slice(0, 2);

  return (
    <div className={styles.side_section}>
      {randomTwo.map((articles, index) => (
        <SideCard key={index} {...articles} setArticle={setArticle} />
      ))}
    </div>
  );
};
export default SideNews;
