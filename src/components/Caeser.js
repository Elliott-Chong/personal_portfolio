import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import code from "../images/caeser-code.png";
import Button from "./Button";

const Caeser = () => {
  return (
    <>
      <Controller>
        <Scene classToggle="fade-in" indicators={true} triggerHook={0.8}>
          <div id="caeser-wrapper">
            <h1
              id="caeser-text"
              className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
            >
              This year, I started getting even more into programming, taking
              CS50, Harvard University's Intro to Computer Science course
              online.
            </h1>
          </div>
        </Scene>
        <Scene
          classToggle="fade-in"
          triggerElement="#caeser-wrapper"
          triggerHook={0.7}
        >
          <div id="caeser-img-wrapper">
            <div className="caeser-img">
              <img src={code} alt="caeser code" className=" lg:ml-0" />
              <p className="description text-xl text-center">
                My first caesar cipher script written in C
              </p>
              <Button id="caeser-button">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://replit.com/@ElliottChong/Caesar-Cipher#main.c"
                >
                  Link to Code
                </a>
              </Button>
            </div>
            <div className="caeser-img ">
              <iframe
                title="Caesar Cipher REPLIT"
                src="https://replit.com/@ElliottChong/Caesar-Cipher?embed=true"
                frameborder="0"
              ></iframe>
              <p className="description text-xl text-center">
                Click the green play button at the bottom right corner to try
                out the code!
              </p>
            </div>
          </div>
        </Scene>
      </Controller>
    </>
  );
};

export default Caeser;
