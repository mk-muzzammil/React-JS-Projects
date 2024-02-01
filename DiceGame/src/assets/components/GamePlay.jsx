import styled from "styled-components";
import GamePlayHeader from "./GamePlayHeader";
import RoleDice from "./RoleDice";
import Rules from "./Rules";

import { useState } from "react";
const GamePlay = () => {
  const [diceNumber, setDiceNumber] = useState(1);

  const [selectedNumber, setSelectedNumber] = useState();
  //   ======================this is for score to show changes on UI if selected num === dicenumber then score increased by random number otherwise minus by 2 =====================
  const [score, setScore] = useState(0);
  //   ======================this is for error message when we click on dice without selecting any number so we willshow an error message=====================
  const [error, setError] = useState("");
  //   ======================this show Rules to show <Rules/> on UI when we click on show rules button  so will do thi sby just applying a js logic {showRules && <Rules/>}======================
  const [showRules, setShowRules] = useState(false);

  const getRandouNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRoleHandler = () => {
    // if we rolling dice without selecting any number then we will show an error message and return from here
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    // otherwise we will generate a random number and set it to diceNumber state if selected number===random number then we will increase score by random number otherwise we will decrease score by 2

    const randomNumber = getRandouNumber(1, 7);
    setDiceNumber((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    // after rolling dice we will set selected number to undefined very important bcz if we dont do this then we will not get any error message if we click on dice without selecting any number and it will cal on the basis of prev state that we selectd
    setSelectedNumber(undefined);
  };

  const reserScoreHandler = () => {
    setScore(0);
  };

  const showRulesbuttonHandler = () => {
    //just making true to false and false to true by using prev state
    setShowRules((prev) => !prev);
  };

  return (
    <>
      <GamePlayHeader
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        score={score}
        setScore={setScore}
        error={error}
        setError={setError}
      />
      <FlexContainer className="gamePlayBodYContainer">
        <div className="diceImageContainer">
          <RoleDice diceNumber={diceNumber} diceRoleHandler={diceRoleHandler} />
        </div>
        <p className="description">Click on Dice to roll</p>

        <button onClick={reserScoreHandler} className="resetScoreButton">
          Reset Score
        </button>
        <button onClick={showRulesbuttonHandler} className="showRulesButton">
          Show Rules
        </button>

        {showRules && <Rules />}
      </FlexContainer>
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .description {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: black;
  }
  .resetScoreButton {
    border: 1px solid black;
    background-color: transparent;
    color: black;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    padding: 0.5rem 1rem;
  }
  .showRulesButton {
    border: none;
    background-color: black;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    padding: 0.5rem 1rem;
  }
`;

export default GamePlay;
