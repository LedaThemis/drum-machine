import React from "react";

import "../styles/DrumButton.css";
export default function DrumButton(props) {
  const classNames =
    props.currentButton === props.audioName ? "drum-button red" : "drum-button";
  return (
    <button type="button" className={classNames} onClick={props.playAudio}>
      {props.keyTrigger}
    </button>
  );
}
