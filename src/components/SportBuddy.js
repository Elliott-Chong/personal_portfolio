import React from "react";
import Button from "./Button";
import { Controller, Scene } from "react-scrollmagic";
import sportbuddy from "../images/sportbuddy.png";

const SportBuddy = () => {
  return (
    <Controller>
      <Scene classToggle="fade-in" triggerHook={0.8}>
        <div id="dev-wrapper">
          <h1
            id="dev-text"
            className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            My latest project, SportBuddy, is my first full stack project. From
            the frontend UI to the backend API design, everything was built and
            designed from scratch by me.
          </h1>
        </div>
      </Scene>

      <Scene classToggle="fade-in" triggerHook={0.7}>
        <div id="dev-img-wrapper">
          <img src={sportbuddy} alt="devconnector screenshot" />
          <div id="dev-info">
            <Button id="dev-source">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Elliott-Chong/SportBuddy"
              >
                Link to Source Code
              </a>
            </Button>
            <Button>
              <a
                href="https://sportbuddy-elle.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Link to Project
              </a>
            </Button>
            <p className="dev-description">
              SportBuddy, a social media platform that allows users to find
              companions to play sports with.
            </p>
            <p className="dev-description">
              Sometimes your friends might be too busy, with SportBuddy, you
              simply have to create a listing, and other users can join you!
            </p>
          </div>
        </div>
      </Scene>
    </Controller>
  );
};

export default SportBuddy;
