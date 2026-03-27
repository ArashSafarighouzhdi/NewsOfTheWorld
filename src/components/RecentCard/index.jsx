import styles from "./recent-card.module.css";

const RecentCard = ({ deck, category, headline, setArticle }) => {
  return (
    <div className={styles.card} onClick={() => setArticle(headline)}>
      <p className={styles.card_news}>{deck}</p>

      <div className={styles.data_news}>
        <span className={styles.category_news}>{category}</span>
      </div>
    </div>
  );
};

export default RecentCard;
