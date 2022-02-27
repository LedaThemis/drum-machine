import React from "react";

import "./styles/App.css";

import DrumButton from "./components/DrumButton.js";
import audioData from "./audio";

function App() {
  const [volumeLevel, setVolumeLevel] = React.useState(0.2);
  const [currentBank, setCurrentBank] = React.useState("bankOne");
  const [currentAction, setCurrentAction] = React.useState("");

  console.log(currentAction);
  function updateBank() {
    setCurrentBank((oldBank) =>
      oldBank === "bankOne" ? "bankTwo" : "bankOne"
    );
  }

  function adjustVolume(newVolumeLevel) {
    setVolumeLevel(newVolumeLevel);
  }

  function playAudio(audioURL, audioName) {
    const audioObj = new Audio(audioURL);
    console.log(audioObj);
    audioObj.volume = volumeLevel;
    audioObj.play();
    setCurrentAction(audioName);
  }
  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyPress);
    return () => {
      window.removeEventListener("keyup", handleKeyPress);
    };
  });

  function handleKeyPress({ keyCode }) {
    audioData[currentBank].forEach((drum) => {
      if (drum.keyCode === keyCode) {
        playAudio(drum.url, drum.id);
      }
    });
  }

  const drumButtons = audioData[currentBank].map((drum) => (
    <DrumButton
      playAudio={() => playAudio(drum.url, drum.id)}
      keyTrigger={drum.keyTrigger}
      keyCode={drum.keyCode}
    />
  ));
  return (
    <div>
      <h1>{currentAction}</h1>
      {drumButtons}
    </div>
  );
}

export default App;
