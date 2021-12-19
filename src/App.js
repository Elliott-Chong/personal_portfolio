import React from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Typewriter from "./components/Typewriter";
import Aspiration from "./components/Aspiration";
import Robotics from "./components/Robotics";
import Scratch from "./components/Scratch";
import Minecraft from "./components/Minecraft";
import Caeser from "./components/Caeser";
import Finance from "./components/Finance";
import Contact from "./components/Contact";
import Cocktail from "./components/Cocktail";
import Codewars from "./components/Codewars";
import DevConnector from "./components/DevConnector";
import EndingAspiration from "./components/EndingAspiration";
function App() {
  return (
    <>
      <Navbar />
      <div className="lg:m-16 m-12 ml-12 flex" id="container">
        <Timeline />
        <div id="content">
          <Typewriter />
          <Aspiration />
          <Robotics />
          <Scratch />
          <Minecraft />
          <Caeser />
          <Finance />
          <Cocktail />
          <Codewars />
          <DevConnector />
          <EndingAspiration />
        </div>
      </div>
      <Contact />
    </>
  );
}

export default App;
