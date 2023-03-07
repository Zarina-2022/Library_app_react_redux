import React from "react";
import { useSelector } from "react-redux";

function App() {
  const allStates = useSelector((state) => state);
  return (
    <div>
      <h1>Library app</h1>
    </div>
  );
}

export default App;
