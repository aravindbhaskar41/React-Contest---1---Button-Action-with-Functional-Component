import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);
  return (
    <div id="main">
      <button id="click" onClick={() => setIsButtonClicked(true)}>
        click
      </button>
      {isButtonClicked == true ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
