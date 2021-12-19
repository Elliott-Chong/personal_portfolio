import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import image from "../images/robotics.png";
const Robotics = () => {
  return (
    <Controller>
      <Scene classToggle="fade-in" triggerHook={0.8}>
        <div id="robotics-wrapper">
          <h1
            id="robotics-text"
            className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            My interest in computer science began in primary 5 when I joined my
            school's robotic CCA.
          </h1>
        </div>
      </Scene>
      <div>
        <Scene
          classToggle="fade-in"
          triggerElement="#robotics-wrapper"
          triggerHook={0.7}
        >
          <img
            id="robotics-img"
            src={image}
            alt="robotics"
            className="ml-5 lg:ml-12"
          />
        </Scene>
      </div>
    </Controller>
  );
};

export default Robotics;
