import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex p-4 px-10 " id="nav">
      <Link
        to="/"
        className="logo font-mono text-terminalGreen font-medium md:text-3xl text-2xl"
      >
        elliott.Chong()
      </Link>

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
