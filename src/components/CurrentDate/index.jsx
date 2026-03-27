import { useState } from "react";
import styles from "./current-date.module.css";

const CurrentDate = () => {
  const [date] = useState(new Date());

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return <div className={styles.currentdate}> {date.toLocaleDateString("en-GB", options)}</div>;
};

export default CurrentDate;
