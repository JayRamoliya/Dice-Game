import React, { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

// don't remove this comments ok bro

// import styled from 'styled-components'

// const Button = styled.button`
// color: white;
// background-color: black;
// padding: 10px;
// `
const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {/* <Button>This is styled component button</Button> */}
      
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
};

export default App;
