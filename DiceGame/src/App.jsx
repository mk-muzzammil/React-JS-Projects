// import styled from "styled-components"; //this import statement is needed
import StartGame from "./assets/components/StartGame";
import GamePlay from "./assets/components/GamePlay";
import "./App.css";
import { useState } from "react";
function App() {
  const [gameStarted, setGameStarted] = useState(false);

  // In this prev is giving prev State in ehich gameStarted is
  const toggleGameStarted = () => {
    setGameStarted((prev) => {
      return !prev;
    });
  };

  return (
    <>{gameStarted ? <GamePlay /> : <StartGame toggle={toggleGameStarted} />}</>
  );
}

export default App;

// ======================By this we can use styled components ===================================
// const Button = styled.button`
//   background-color: black;
//   color: white;
//   font-size: 1.5rem;
//   padding: 0.5rem 1rem;
//   border-radius: 0.5rem;
// `;
