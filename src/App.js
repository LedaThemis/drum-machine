import React from "react";

import "./styles/App.css";

import DrumButton from "./components/DrumButton.js";
import audioData from "./audio";

function App() {
  const [volumeLevel, setVolumeLevel] = React.useState(0.2);
  const [currentBank, setCurrentBank] = React.useState("bankOne");

  function updateBank() {
    setCurrentBank((oldBank) =>
      oldBank === "bankOne" ? "bankTwo" : "bankOne"
    );
  }

  function adjustVolume(newVolumeLevel) {
    setVolumeLevel(newVolumeLevel);
  }

  function playAudio(audioURL) {
    const audioObj = new Audio(audioURL);
    audioObj.volume = volumeLevel;
    audioObj.play();
  }

  const drumButtons = audioData[currentBank].map((drum) => (
    <DrumButton
      audioName={drum.id}
      playAudio={() => playAudio(drum.url)}
      keyTrigger={drum.keyTrigger}
      keyCode={drum.keyCode}
    />
  ));
  return <div>{drumButtons}</div>;
}

export default App;
