import React from "react";

export default function ToggleSwitch() {
  return (
    <div className="toggle-switch">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
}
