import React from "react";

function Toggle(props) {
  return (
    <div
      onClick={props.onClick}
      className={`toggle${props.toggled ? " night" : ""}`}
    >
      <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div>
    </div>
  );
}

export default Toggle;
