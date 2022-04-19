import React from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Typewriter from "./components/Typewriter";
import Aspiration from "./components/Aspiration";
import Robotics from "./components/Robotics";
import Minecraft from "./components/Minecraft";
import Finance from "./components/Finance";
import Scratch from "./components/Scratch";
import Caeser from "./components/Caeser";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cocktail from "./components/Cocktail";
import Codewars from "./components/Codewars";
import DevConnector from "./components/DevConnector";
import EndingAspiration from "./components/EndingAspiration";
import { Switch, Route } from "react-router-dom";
import Website from "./components/Website";
import SportBuddy from "./components/SportBuddy";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
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
              <SportBuddy />
              <Website />
              <EndingAspiration />
            </div>
          </div>
          <Contact />
        </Route>
        <Route path="/about" exact>
          about
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
      </Switch>
    </>
  );
}

export default App;
