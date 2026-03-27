import { articles } from "../../data/data";
import NewsSection from "../NewsSection";

const NewsContainer = ({setArticle}) => {
  const uniqueCategories = [...new Set(articles.map((item) => item.category))];

  return (
    <div>
      {uniqueCategories.map((category, index) => (
        <NewsSection key={index} categoryType={category} setArticle={setArticle} />
      ))}
    </div>
  );
};

export default NewsContainer;
