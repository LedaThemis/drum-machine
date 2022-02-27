import React from "react";

export default function DrumButton(props) {
  return (
    <button type="button" class="drum-button" onClick={props.playAudio}>
      {props.keyTrigger}
    </button>
  );
}
