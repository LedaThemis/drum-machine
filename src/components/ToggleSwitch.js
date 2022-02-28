import React from "react";

import "../styles/ToggleSwitch.css";

export default function ToggleSwitch(props) {
  return (
    <div className="toggle-switch">
      <h3>{props.name}</h3>
      <label className="switch">
        <input type="checkbox" onClick={props.updateFunction} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
