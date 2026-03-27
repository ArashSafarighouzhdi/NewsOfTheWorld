import styles from "./card-news.module.css";
import { getImageURL } from "../../utils/functions";

const CardNews = ({ headline, deck, image, setArticle }) => {
  return (
    <div className={styles.card} onClick={() => setArticle(headline)}>
      <img className={styles.card_img} src={getImageURL(image)} />
      <h3 className={styles.card_title}>{headline}</h3>
      <p className={styles.card_news}>{deck}</p>
    </div>
  );
};

export default CardNews;
