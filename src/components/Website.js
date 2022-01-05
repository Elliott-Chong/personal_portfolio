import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import website from "../images/website.png";
import Button from "./Button";

const Website = () => {
  return (
    <Controller>
      <Scene classToggle="fade-in" triggerHook={0.8}>
        <div id="finance-wrapper">
          <h1
            id="finance-text"
            className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            This website is a showcase of all my significant projects so far. I
            am proud of the work that I have put in to learn and build out all
            these projects.
          </h1>
        </div>
      </Scene>

      <Scene classToggle="fade-in" triggerHook={0.7}>
        <div id="finance-img-wrapper">
          <img src={website} alt="website screenshot" />
          <div id="finance-info">
            <Button id="finance-source">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Elliott-Chong/personal_portfolio"
              >
                Link to Source Code
              </a>
            </Button>
            <p className="finance-description">
              This website was built out using ReactJS, with custom CSS written
              using Tailwind CSS, a utility based CSS framework. The theme and
              design of this website was designed by me from scratch using
              Inkscape, a vector based graphics editor.
            </p>
          </div>
        </div>
      </Scene>
    </Controller>
  );
};

export default Website;
