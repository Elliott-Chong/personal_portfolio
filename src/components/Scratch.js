import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import car from "../images/scratch_car_racing.png";
import snake from "../images/scratch_snake.png";
import Button from "./Button";

const Scratch = () => {
  return (
    <Controller>
      <Scene classToggle="fade-in" indicators={true} triggerHook={0.8}>
        <div id="scratch-wrapper">
          <h1
            id="scratch-text"
            className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            In Secondary 1 & 2, I discovered the world of scratch, which was
            where I would spent a lot of my time making games.
          </h1>
        </div>
      </Scene>
      <Scene
        classToggle="fade-in"
        triggerElement="#scratch-wrapper"
        triggerHook={0.6}
      >
        <div id="scratch-img-wrapper">
          <div className="scratch-img">
            <img src={car} alt="scratch" className=" lg:ml-12 " />
            <iframe
              title="car game"
              src="https://sulfurous.aau.at/html/app.html?id=90753321&turbo=false&full-screen=false&aspect-x=&aspect-y=&resolution-x=480&resolution-y=360"
              frameborder="0"
            ></iframe>

            <Button>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://scratch.mit.edu/projects/90753321/"
              >
                Link to Game
              </a>
            </Button>
          </div>
          <div className="scratch-img lg:ml-12">
            <img src={snake} alt="scratch" />

            <iframe
              title="snake game"
              src="https://sulfurous.aau.at/html/app.html?id=215637415&turbo=true&full-screen=false&aspect-x=&aspect-y=&resolution-x=480&resolution-y=360"
              frameborder="0"
            ></iframe>
            <Button>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://scratch.mit.edu/projects/215637415/"
              >
                Link to Game
              </a>
            </Button>
          </div>
        </div>
      </Scene>
    </Controller>
  );
};

export default Scratch;
