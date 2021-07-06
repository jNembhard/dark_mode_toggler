import React from "react";
import Toggle from "./Toggle";

function App() {
  const [toggled, setToggled] = React.useState(false);

  const handleClick = () => {
    let toggleColor = document.getElementById("Body");
    toggleColor.classList.toggle("active");
    setToggled((state) => !state);
  };

  return (
    <div className="App Body">
      <Toggle onClick={handleClick} toggled={toggled} />
    </div>
  );
}

export default App;
