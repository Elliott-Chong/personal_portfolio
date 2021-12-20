import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import finance from "../images/finance.png";
import Button from "./Button";

const Finance = () => {
  return (
    <Controller>
      <Scene classToggle="fade-in" triggerHook={0.8}>
        <div id="finance-wrapper">
          <h1
            id="finance-text"
            className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            It was in CS50 where I got my first experience with web development,
            creating a stock trading simulator with flask, using an external
            API.
          </h1>
        </div>
      </Scene>

      <Scene classToggle="fade-in" triggerHook={0.7}>
        <div id="finance-img-wrapper">
          <img src={finance} alt="finance50 screenshot" />
          <div id="finance-info">
            <Button id="finance-source">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Elliott-Chong/elle-finance"
              >
                Link to Source Code
              </a>
            </Button>
            <Button>Link to Project</Button>
            <p className="finance-description">
              CS50 Finance, an assignment part of the course that taught me the
              basics of web programming.
            </p>
            <p className="finance-description">
              This project truly opened my eyes to the world of web development.
              It taught me the use of external REST APIs to utilise other
              people's data in my own project, and also taught me the use of SQL
              to manage data in my database.{" "}
            </p>
          </div>
        </div>
      </Scene>
    </Controller>
  );
};

export default Finance;
