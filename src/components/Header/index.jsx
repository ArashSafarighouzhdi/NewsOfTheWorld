import styles from "./header.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import SocialMedia from "../SocialMedia";

const Header = () => {
  return (
    <header className={styles.header}>
      <SocialMedia />

      <h1 className={styles.headerTitle}>News Of The World</h1>
      <div className={styles.phone}>
        <FaPhoneAlt /> (012)345-678
      </div>
    </header>
  );
};

export default Header;
