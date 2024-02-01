import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer className="rulesContainer">
      <h1>How to play dice game</h1>
      <div className="stepByStepRules">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 2rem;
  gap: 1rem;
  padding: 1rem;
  width: 700px;
  background-color: #fbf1f1;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: black;
    white-space: nowrap;
  }
  .stepByStepRules {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`;

export default Rules;
