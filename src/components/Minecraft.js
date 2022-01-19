import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import code from "../images/whatsbus.png";
import Button from "./Button";
const Minecraft = () => {
  return (
    <>
      <Controller>
        <Scene classToggle="fade-in" triggerHook={0.8}>
          <div id="minecraft-wrapper">
            <h1
              id="minecraft-text"
              className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
            >
              It was around Secondary 3 where I started teaching myself Python
              through online tutorials, building out many small projects along
              the way.
            </h1>
          </div>
        </Scene>
        <Scene
          classToggle="fade-in"
          triggerElement="#minecraft-wrapper"
          triggerHook={0.7}
        >
          <div id="minecraft-img-wrapper">
            <div className="minecraft-img lg:ml-12 ml-10">
              <img src={code} alt="minecraft code" className=" lg:ml-0" />
              <p className="description  text-xl text-center">
                A script I wrote that pulled data from LTA's bus arrival API and
                updated users on WhatsApp in real time.
              </p>
            </div>
            <div className="mc-source">
              <Button>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Elliott-Chong/whatsbus"
                >
                  Link to Source Code
                </a>
              </Button>
              <p className="finance-description">
                I wrote this program primarily to solve my own problem of always
                missing the bus.
              </p>
              <p className="finance-description">
                Instead of manually checking a bus app, the script would
                automatically remind me of bus timings so that I can plan my
                travels better.
              </p>
            </div>
          </div>
        </Scene>
      </Controller>
    </>
  );
};

export default Minecraft;
