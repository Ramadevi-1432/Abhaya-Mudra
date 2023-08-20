import React from "react";
// import { useState } from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils.js/navSlice";

const MainContainer = () => {
  //   const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="main-container">
      <div className="icons">
        <AiOutlineDoubleLeft
          className="side-bar"
          onClick={() => handleToggle()}
        />
      </div>
      <img
        src="https://i.imgur.com/CZT1d6u.png"
        alt="Abhaya-mudra"
        className="image"
      />
    </div>
  );
};

export default MainContainer;
