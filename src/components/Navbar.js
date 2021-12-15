import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex  px-10 p-4 items-center " id="nav">
      <div>
        <Link
          to="/"
          className="logo font-mono text-terminalGreen font-medium md:text-3xl text-2xl"
        >
          elliott.Chong()
        </Link>
      </div>

      <div className="lg:hidden ml-auto cursor-pointer" id="ham-wrapper">
        <div className="ham   bg-white"></div>
        <div className="ham   bg-white"></div>
        <div className="ham   bg-white"></div>
      </div>

      <div className="links font-mono text-terminalGreen font-medium text-3xl ml-auto">
        <Link to="/about" className="lg:ml-8 hidden lg:inline">
          .about()
        </Link>
        <Link to="/projects" className="lg:ml-8 hidden lg:inline">
          .projects()
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
