import React from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Typewriter from "./components/Typewriter";
function App() {
  return (
    <>
      <Navbar />
      <div className="lg:m-16 lg:ml-80 m-12 ml-10 flex" id="container">
        <Timeline />

        <div id="content">
          <Typewriter />
        </div>
      </div>
    </>
  );
}

export default App;
