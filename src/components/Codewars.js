import React from "react";
import Button from "./Button";
import { Controller, Scene } from "react-scrollmagic";
import codewarsQuestion from "../images/codewars-question.png";
import codewarsSolution from "../images/codewars-solution.png";

const Codewars = () => {
  return (
    <Controller>
      <Scene classToggle="fade-in" triggerHook={0.8}>
        <div id="codewars-wrapper">
          <h1
            id="codewars-text"
            className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            It was around this time where I discovered algorithm based coding
            challenges. This was where I honed my Python skills by solving
            questions.
          </h1>
        </div>
      </Scene>
      <Scene classToggle="fade-in" triggerHook={0.7}>
        <div id="codewars-img-wrapper">
          <img
            id="codewars-question-img"
            src={codewarsQuestion}
            alt="codewars question"
          />
          <div id="codewars-info">
            <img src={codewarsSolution} alt="codewars solution" />
            <p className="description ">
              Codewars, an algorithmic style coding challenge website where
              users can write code in their preferred language to solve a set of
              problems
            </p>
            <Button>
              <a
                href="https://www.codewars.com/users/ElliottBelle"
                target="_blank"
                rel="noreferrer"
              >
                My Codewars Profile
              </a>
            </Button>
          </div>
        </div>
      </Scene>
    </Controller>
  );
};

export default Codewars;
