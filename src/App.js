import React from "react";

import "./styles/App.css";

import DrumButton from "./components/DrumButton.js";
import ToggleSwitch from "./components/ToggleSwitch";
import Slider from "./components/Slider";
import audioData from "./audio";

function App() {
  const [isOn, setIsOn] = React.useState(false);
  const [volumeLevel, setVolumeLevel] = React.useState(50);
  const [currentBank, setCurrentBank] = React.useState("bankOne");
  const [currentAction, setCurrentAction] = React.useState("");
  const [currentPressedButton, setCurrentPressedButton] = React.useState("");

  function setPower() {
    setIsOn((old) => !old);
    setCurrentAction("");
  }

  function updateBank() {
    if (isOn) {
      setCurrentBank((oldBank) =>
        oldBank === "bankOne" ? "bankTwo" : "bankOne"
      );
      setCurrentAction(
        currentBank === "bankTwo" ? "Heater Kit" : "Smooth Piano Kit"
      );
    }
  }

  function adjustVolume(e) {
    if (isOn) {
      setVolumeLevel(e.target.value);
      setCurrentAction(`Volume: ${volumeLevel}`);
      setTimeout(() => setCurrentAction(""), 2000);
    }
  }

  function playAudio(audioURL, audioName) {
    if (isOn) {
      const audioObj = new Audio(audioURL);
      audioObj.volume = volumeLevel / 100;
      audioObj.play();
      setCurrentAction(audioName);

      // Register current pressed button to style pressed button
      setCurrentPressedButton(audioName);
      // Wait 125ms to simulate a button being clicked
      setTimeout(() => setCurrentPressedButton(""), 125);
    }
  }
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  function handleKeyDown({ keyCode }) {
    audioData[currentBank].forEach((drum) => {
      if (drum.keyCode === keyCode) {
        playAudio(drum.url, drum.id);

        setCurrentPressedButton(drum.id);
      }
    });
  }

  function handleKeyUp() {
    setCurrentPressedButton("");
  }

  const drumButtons = audioData[currentBank].map((drum) => (
    <DrumButton
      audioName={drum.id}
      playAudio={() => playAudio(drum.url, drum.id)}
      keyTrigger={drum.keyTrigger}
      currentButton={currentPressedButton}
      key={drum.id}
    />
  ));
  return (
    <div>
      <h1>{currentAction}</h1>
      {drumButtons}
      <ToggleSwitch
        name="Bank"
        updateFunction={updateBank}
        checked={"bankOne" === currentBank}
      />
      <Slider volume={volumeLevel} adjustVolume={adjustVolume} />
      <ToggleSwitch name="Power" updateFunction={setPower} checked={isOn} />
    </div>
  );
}

export default App;
