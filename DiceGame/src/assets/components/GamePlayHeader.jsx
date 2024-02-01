import styled from "styled-components";

const GamePlayHeader = ({
  selectedNumber,
  setSelectedNumber,
  score,
  error,
  setError,
}) => {
  const scoreNumberArray = [1, 2, 3, 4, 5, 6];

  const handleSelectedNumber = (selectedNumber) => {
    setSelectedNumber(selectedNumber);
    setError("");
  };

  return (
    <FlexContainer>
      <div className="scoreContainer">
        <ScoreContainer>{score}</ScoreContainer>
        <p className="scoreDescription">Total Score</p>
      </div>
      <div className="selectNumberContainer">
        <p className="errorMessage">{error}</p>
        <div className="selectNumbers">
          {scoreNumberArray.map((scoreNumber, i) => (
            <ScoreNumber
              key={i}
              onClick={() => handleSelectedNumber(scoreNumber)}
              isSelected={scoreNumber === selectedNumber}
            >
              {scoreNumber}
            </ScoreNumber>
          ))}
        </div>
        <p className="selectNumberDesc">Select Number</p>
      </div>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 1rem;

  .scoreContainer {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    justify-content: center;
    align-items: center;
  }

  .scoreDescription {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: black;
  }

  .selectNumberContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .errorMessage {
      color: red;
      font-size: 1rem;
      font-weight: 400;
      font-family: "Poppins", sans-serif;
    }

    .selectNumbers {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      & :hover {
        cursor: pointer;
      }
    }

    .selectNumberDesc {
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 700;
      color: black;
      align-self: flex-end;
    }
  }
`;
const ScoreNumber = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid black;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  background-color: white;
  color: black;

  ${(props) => props.isSelected && `background-color: black; color: white;`}
`;

const ScoreContainer = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: black;
`;

export default GamePlayHeader;
