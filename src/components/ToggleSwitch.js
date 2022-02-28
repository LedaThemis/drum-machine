import React from "react";

import "../styles/ToggleSwitch.css";

export default function ToggleSwitch(props) {
  return (
    <div className="toggle-switch">
      <h3>Bank</h3>
      <label className="switch">
        <input type="checkbox" onClick={props.updateBank} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
