import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="main-container">
      <div className="counter-setion">
        <h1 className="heading">Counter Web App</h1>
        <div className="number-section">
          <h1 className="num">{count}</h1>
        </div>
        <div className="btn-section">
          <button className="btn" onClick={increment}>
            Increment
          </button>
          <button className="btn" onClick={decrement}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
