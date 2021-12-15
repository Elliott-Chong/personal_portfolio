import React from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Typewriter from "./components/Typewriter";
import Aspiration from "./components/Aspiration";
function App() {
  return (
    <>
      <Navbar />
      <div className="lg:m-16 lg:ml-80 m-12 ml-12 flex" id="container">
        <Timeline />

        <div id="content">
          <Typewriter />
          <Aspiration />
        </div>
      </div>
    </>
  );
}

export default App;
