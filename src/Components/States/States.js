import React from "react";

import "./States.css";

const States = () => {
  return (
    <div className="states-container">
      <h3>Estados:</h3>
      <div className="samples-states">
        <div className="states">
          <div className="free-state">
            <div className="free-color"></div>
            <p>Libre</p>
          </div>
          <div className="using-state">
            <div className="using-color"></div>
            <p>Usando</p>
          </div>
          <div className="full-state">
            <div className="full-color"></div>
            <p>Agotado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
