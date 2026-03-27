import styles from "./main-section.module.css";
import RecentNews from "../ReecntNews";
import MainNews from "../MainNews";
import SideNews from "../SideNews";

const MainSection = ({ setArticle }) => {

  return (
    <div className={styles.mainsection}>
      <RecentNews setArticle={setArticle} />
      <MainNews setArticle={setArticle} />
      <SideNews setArticle={setArticle} />
    </div>
  );
};

export default MainSection;
