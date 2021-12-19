import React from "react";
import { Controller, Scene } from "react-scrollmagic";

const EndingAspiration = () => {
  return (
    <>
      <Controller>
        <Scene classToggle="fade-in" triggerHook={0.8}>
          <div id="end-aspiration">
            <h1 className="ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen">
              Of course, I shall continue to strive to improve myself and
              hopefully get closer to my dream of one day changing the world
              with technology.
            </h1>
          </div>
        </Scene>
      </Controller>
    </>
  );
};

export default EndingAspiration;
