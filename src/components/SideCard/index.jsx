import styles from "./side-card.module.css";
import { getImageURL } from "../../utils/functions";

const SideCard = ({ headline, deck, image, setArticle }) => {
  return (
    <div className={styles.card} onClick={() => setArticle(headline)}>
      <img className={styles.side_img} src={getImageURL(image)} />
      <h3 className={styles.side_title}>{headline}</h3>
      <p className={styles.side_news}>{deck}</p>
    </div>
  );
};

export default SideCard;
