import React from "react";
import "../styles/Slider.css";

export default function Slider(props) {
  return (
    <div className="audio-slider">
      <input
        type="range"
        min="1"
        max="100"
        value={props.volume}
        className="slider-volume"
        id="audioSlider"
        onChange={props.adjustVolume}
      />
    </div>
  );
}
