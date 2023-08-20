import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import "../App.css";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <div>
        <Sidebar />
      </div>
      <div className="col-span-11">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
