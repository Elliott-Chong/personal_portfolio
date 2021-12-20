import React from "react";
import Button from "./Button";
import { Controller, Scene } from "react-scrollmagic";
import dev from "../images/devconnector.png";

const DevConnector = () => {
  return (
    <Controller>
      <Scene classToggle="fade-in" triggerHook={0.8}>
        <div id="dev-wrapper">
          <h1
            id="dev-text"
            className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            While improving my algorithms and data structures knowledge, I
            continued taking online web development courses. Learning a full
            stack tech stack.
          </h1>
        </div>
      </Scene>

      <Scene classToggle="fade-in" triggerHook={0.7}>
        <div id="dev-img-wrapper">
          <img src={dev} alt="devconnector screenshot" />
          <div id="dev-info">
            <Button id="dev-source">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Elliott-Chong/DevConnector"
              >
                Link to Source Code
              </a>
            </Button>
            <Button>
              <a
                href="https://devconnector-elliott.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Link to Project
              </a>
            </Button>
            <p className="dev-description">
              DevConnector, a social media platform made for developers. Made
              with MongoDB, ExpressJS & React. The project was built out along a
              course teaching full stack web development.
            </p>
            <p className="dev-description">
              This was my first full stack course, builing from scratch both the
              backend API endpoints with expressJS and MongoDB, and also the
              frontend with ReactJS. It taught me important concepts such as
              JWTs for authentication and password encryption.{" "}
            </p>
          </div>
        </div>
      </Scene>
    </Controller>
  );
};

export default DevConnector;
