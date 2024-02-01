import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.navContainer}>
      <div className="leftLogocontainer">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className={styles.rightAnchorTagscontainer}>
        <li>
          <a href="###">Home</a>
        </li>
        <li>
          <a href="###">About</a>
        </li>
        <li>
          <a href="###">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
