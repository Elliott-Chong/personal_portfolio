import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <footer id="contact" className="font-poppins font-medium">
        <p className="contact">Email: elliottchong16@gmail.com</p>
        <p className="contact">Phone: +65 9045 2020</p>
        <div id="social-icons">
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
      </footer>
    </>
  );
};

export default Contact;
