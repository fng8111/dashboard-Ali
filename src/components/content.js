import React from "react";
import "./content.css";
import bugsnag from "../assets/imgs/bugsnag.png";
import MediaControlCard from "./card";

const Content = () => {
  return (
    <div className="content">
      <div className="herologo">
        <img src={bugsnag} />
      </div>
      <div className="subcontainer">
        <div className="chart"></div>
        <div className="chart"></div>
      </div>
      <div className="cardscontainer">
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
        <MediaControlCard />
      </div>
    </div>
  );
};

export default Content;
