import React from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Typewriter from "./components/Typewriter";
import Aspiration from "./components/Aspiration";
import Robotics from "./components/Robotics";
import Scratch from "./components/Scratch";
import Minecraft from "./components/Minecraft";
import Caeser from "./components/Caeser";
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
        </div>
      </div>
    </>
  );
}

export default App;
