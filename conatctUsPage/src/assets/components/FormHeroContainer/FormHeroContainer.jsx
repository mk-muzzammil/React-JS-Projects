import styles from "./FormHeroContainer.module.css";
import Button from "../Button/Button.jsx";
import { MdMessage } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { useRef, useState } from "react";
const FormHeroContainer = () => {
  //============================= use of useState hook to store the data=====================================

  const [nameInput, setNameInput] = useState("Muzz");
  const [emailInput, setEmailInput] = useState("Muzz@gmail.com");
  const [textInput, setTextInput] = useState("Hey I am Muhammad Muzzammil");

  // =====================================uSE OF useRef HOOK TO STORE THE DATA=====================================
  const nameEle = useRef();
  const emailEle = useRef();
  const textAreaEle = useRef();

  const onClickButtonHandler = (buttonName) => {
    console.log("Button is clicked  :", buttonName);
  };
  const OnSubmitbuttonHandler = (event) => {
    event.preventDefault();

    // const name = event.target[0].value;
    // const email = event.target[1].value;
    // const textArea = event.target[2].value;
    // setNameInput(name);
    // setEmailInput(email);
    // setTextInput(textArea);

    //====================================useRef

    setNameInput(nameEle.current.value);
    setEmailInput(emailEle.current.value);
    setTextInput(textAreaEle.current.value);

    nameEle.current.value = "";
    emailEle.current.value = "";
    textAreaEle.current.value = "";
  };

  return (
    <div className={styles.formHeroMaincontainer}>
      <div className={styles.FormHeroContentContainer}>
        <div className={styles.buttonContainer}>
          <div className={styles.topbutton}>
            <Button
              onClickHandler={onClickButtonHandler}
              ButtonContent="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="20px" />}
            />
            <Button
              onClickHandler={onClickButtonHandler}
              ButtonContent="VIA CALL"
              icon={<MdOutlinePhone fontSize="20px" />}
            />
          </div>
          <Button
            onClickHandler={onClickButtonHandler}
            ButtonContent="VIA EMAIL FORM"
            icon={<MdMessage fontSize="20px" />}
            outline={"true"}
          />
        </div>

        <form
          className={styles.formInputcontainer}
          onSubmit={OnSubmitbuttonHandler}
        >
          <input
            type="text"
            name="Name"
            ref={nameEle}
            id="nameInput"
            placeholder="Enter Name .."
          />
          <input
            type="email"
            ref={emailEle}
            name="Email"
            id="emailInput"
            placeholder="Enter Email .."
          />
          <textarea
            name="text"
            ref={textAreaEle}
            id="textArea"
            rows="4"
            placeholder="Enter Text Area .."
          ></textarea>
          <Button
            className={styles.submitButton}
            outline={"false"}
            ButtonContent="SUBMIT"
            onClickHandler={onClickButtonHandler}
          />
        </form>
        <div className="contentShowContainer">
          <p>
            "Name: "{nameInput} "Email :"{emailInput} "Text Area :" {textInput}
          </p>
        </div>
      </div>
      <div className={styles.FormHeroImageContainer}>
        <img src="/images/contact.svg" alt="Contact" />
      </div>
    </div>
  );
};

export default FormHeroContainer;
