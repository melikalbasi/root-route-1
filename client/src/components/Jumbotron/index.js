import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, textAlign: "center", backgroundImage: "url('https://cdn-images-1.medium.com/max/1600/1*1F8yECfqQpaonWxr1Ww5og.jpeg')" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
