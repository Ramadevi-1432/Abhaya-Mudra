import React from "react";
import { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import Sidebar from "./Sidebar";
import "../index.css";

const MainContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      <Sidebar show={isOpen} />
      <div className="main-container w-full">
        <div className="icons">
          <AiOutlineDoubleLeft
            className="side-bar"
            onClick={() => handleOpen()}
          />
        </div>
        <img
          src="https://i.imgur.com/CZT1d6u.png"
          alt="Abhaya-mudra"
          className="image"
        />
      </div>
    </div>
  );
};

export default MainContainer;
