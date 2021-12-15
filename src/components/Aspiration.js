import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const Aspiration = () => {
  return (
    <>
      <Controller>
        <Scene classToggle="fade-in" indicators={true} triggerHook={0.8}>
          <h1
            id="aspiration"
            className="mt-48 ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            An aspiring full-stack developer with a passion for learning.
          </h1>
        </Scene>
      </Controller>
    </>
  );
};

export default Aspiration;
