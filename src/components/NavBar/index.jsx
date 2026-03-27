import styles from "./navbar.module.css";
import CurrentDate from "../CurrentDate";
import { articles } from "../../data/data";

const NavBar = ({ setCategory }) => {
  const uniqueCategories = [...new Set(articles.map((item) => item.category))];
  return (
    <div className={styles.navbar}>
      <button onClick={() => setCategory(null)}>Home</button>
      {uniqueCategories.map((category, index) => (
        <button key={category} onClick={() => setCategory(category)}>
          {category}
        </button>
      ))}
      <div className={styles.currentdate}>
        <CurrentDate />
      </div>
    </div>
  );
};

export default NavBar;
