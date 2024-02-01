import styled from "styled-components";
const StartGame = ({ toggle }) => {
  return (
    <Container className="mainImageContentContainer">
      <div className="imageContainer">
        <img src="/images/dices.png" alt="Dices Pic" />
      </div>
      <div className="contentContainer">
        <Heading>DICE GAME</Heading>
        <Button onClick={toggle} className="ButtonCon">
          Play Now
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .contentContainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (max-width: 950px) {
    .imageContainer img {
      width: 100%;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;

    .ButtonCon {
      align-self: center;
    }
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: black;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  white-space: nowrap;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  align-self: flex-end;
  transition: 0.4s background-color ease-in;
  border: 1px solid transparent;

  &:hover {
    background-color: #fefdfd;
    color: black;
    cursor: pointer;
    transition: 0.4s background-color ease-in;
    border: 2px solid black;
  }
`;

export default StartGame;
