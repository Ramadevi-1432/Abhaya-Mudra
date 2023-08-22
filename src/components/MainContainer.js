import React from "react";
import { useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
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
      <div className="main-container w-full h-auto">
        {!isOpen ? (
          <div className="icons icons-left">
            <AiOutlineDoubleLeft
              className="side-bar sidebar-left"
              onClick={() => handleOpen()}
              size={20}
            />
          </div>
        ) : (
          <div className="icons icons-right">
            <AiOutlineDoubleRight
              className="side-bar sidebar-right"
              onClick={() => handleOpen()}
              size={20}
            />
          </div>
        )}

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
