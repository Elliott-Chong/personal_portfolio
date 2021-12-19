import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import cocktail from "../images/github-users.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Cocktail = () => {
  return (
    <Controller>
      <Scene classToggle="fade-in" indicators={true} triggerHook={0.8}>
        <div id="cocktail-wrapper">
          <h1
            id="cocktail-text"
            className="space-elle ml-5 text-2xl lg:ml-12 lg:text-5xl font-mono relative text-terminalGreen"
          >
            After CS50 piqued my interest in web development, I furthered my
            knowledge by taking online courses on Udemy and YouTube.
          </h1>
        </div>
      </Scene>
      <Scene classToggle="fade-in" triggerHook={0.7}>
        <div id="cocktail-img-wrapper">
          <img src={cocktail} alt="cocktail screenshot" />
          <div id="cocktail-info">
            <Button id="cocktail-source">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Elliott-Chong/react-search-github-users"
              >
                Link to Source Code
              </a>
            </Button>
            <Button>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github-users-elliott.netlify.app/"
              >
                Link to Project
              </a>
            </Button>
            <p className="cocktail-description">
              Github-Users, A project assigned by my Udemy course on the
              frontend React framework.
            </p>
            <p className="cocktail-description">
              This project solidified my learning of the React framework,
              teaching me the use of the GitHub API and more advanced React
              concepts.
            </p>
            <p className="cocktail-description">
              I learnt how to utilize external NPM libraries to help accomplish
              complex features with ease. e.g. Using FusionCharts to make
              beautiful charts to display user data.{" "}
              <Link className="learn-more ml-2" to="/projects#github-users">
                learn more...
              </Link>
            </p>
          </div>
        </div>
      </Scene>
    </Controller>
  );
};

export default Cocktail;
