import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerheading}>CONTACT US</h1>
      <p className={styles.headerParagraph}>
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
    </header>
  );
};

export default Header;
