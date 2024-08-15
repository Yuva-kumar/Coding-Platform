import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageA.css"; // Import the CSS for PageA

function PageA() {
  const navigate = useNavigate();

  const handleGridClick = (gridNumber) => {
    navigate("/new-page");
  };

  return (
    <div className="page-a">
      <center>
        <h2>Coding Playground</h2>
      </center>

      <div className="grid-containers">
        <div
          className="grid-item grid-item-1"
          onClick={() => handleGridClick(1)}
        >
          Monkey Jump
        </div>
        <div
          className="grid-item grid-item-2"
          onClick={() => handleGridClick(2)}
        >
          King survived
        </div>
        <div
          className="grid-item grid-item-3"
          onClick={() => handleGridClick(3)}
        >
          Last Person
        </div>
        <div
          className="grid-item grid-item-4"
          onClick={() => handleGridClick(4)}
        >
          Can climb or not
        </div>
        <div
          className="grid-item grid-item-5"
          onClick={() => handleGridClick(5)}
        >
          Is He win

        </div>
        <div
          className="grid-item grid-item-6"
          onClick={() => handleGridClick(6)}
        >
          Robber escape
        </div>
      </div>
    </div>
  );
}

export default PageA;
