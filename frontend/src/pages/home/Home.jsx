import React from "react";
import "./home.scss";
import LowItemBox from "../../Components/low item box/LowItemBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box1">
        <LowItemBox />
      </div>
      <div className="box2">box</div>
      <div className="box3">box</div>
      <div className="box4">box</div>
      <div className="box5">box</div>
      <div className="box6">box</div>
    </div>
  );
};

export default Home;
