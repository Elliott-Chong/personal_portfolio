import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import code from "../images/minecraft-code.png";
import fish from "../images/minecraft-fish.png";
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
                a simple script I wrote to automate fishing in Minecraft
              </p>
            </div>
            <div className="minecraft-img lg:ml-12 ml-10">
              <img src={fish} alt="minecraft code" className="lg:ml-0" />
            </div>
          </div>
        </Scene>
      </Controller>
    </>
  );
};

export default Minecraft;
