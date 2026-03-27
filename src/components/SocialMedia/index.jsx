import styles from "./social-media.module.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className={styles.socialmedia}>
      <FaFacebookSquare />
      <FaYoutubeSquare />
      <FaInstagramSquare />
      <FaTwitterSquare />
    </div>
  );
};

export default SocialMedia;
