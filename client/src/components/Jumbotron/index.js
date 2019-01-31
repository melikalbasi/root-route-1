import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 50, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
