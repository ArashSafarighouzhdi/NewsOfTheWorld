import styles from "./footer.module.css";
import SocialMedia from "../SocialMedia";
import NavBar from "../NavBar";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.section}>
          <h2 className={styles.logoText}>News For Today</h2>
          <p className={styles.description}>
            The best news platform providing you with the latest updates from
            around the world.
          </p>
        </div>

        <div className={styles.section}>
          <h3>Get News</h3>
          <div className={styles.footerNavWrapper}>
            <NavBar />
          </div>
        </div>

        <div className={styles.section}>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Writers List</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Subscribe</h3>
          <div className={styles.subscribeForm}>
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 Arash</p>
        <div className={styles.socialIcons}>
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
