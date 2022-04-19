import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

const Navbar = () => {
  // const hamRef = React.useRef();
  // const hamClick = () => {};
  return (
    <nav className="flex  px-10 item-center " id="nav">
      <div className='space-x-10'>
        <Link
          to='/'
          className="logo font-mono text-terminalGreen font-medium md:text-3xl text-2xl"
        >
          elliott.Chong()
        </Link>
        <Link
          to="/projects"
          className="font-mono text-white hidden md:inline font-medium hover:text-gray-400 md:text-3xl text-2xl"
        >
          Projects
        </Link>

      </div>
      <div id="social-icons-nav" className="ml-auto hidden lg:flex">
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Elliott-Chong"
          >
            <FaGithub className="social-icon" />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/el.lebelle/"
          >
            <BsInstagram className="social-icon" />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/elliott-chong-566a98224/"
          >
            <FiLinkedin className="social-icon" />
          </a>
        </div>
      </div>

      {/* <div
        className="lg:hidden ml-auto cursor-pointer"
        id="ham-wrapper"
        ref={hamRef}
        onClick={hamClick}
      >
        <div className="ham   bg-white"></div>
        <div className="ham   bg-white"></div>
        <div className="ham   bg-white"></div>
      </div> */}
    </nav>
  );
};

export default Navbar;
