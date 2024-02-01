import styles from "./Button.module.css";
const Button = ({ icon, ButtonContent, outline, onClickHandler }) => {
  return (
    <button
      onClick={() => onClickHandler(ButtonContent)}
      className={outline === "true" ? styles.outlineBtn : styles.primaryButton}
    >
      {icon}
      <span className="buttonContent">{ButtonContent}</span>
    </button>
  );
};

export default Button;
