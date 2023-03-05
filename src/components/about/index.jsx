import React from "react";
import { Style } from "./style";
import { Bounce, Zoom } from "react-reveal";

const About = () => {
  return (
    <Style>
      <div className="block">
        <Bounce left cascade>
          <div>
            <div className="box">
              <img src={require("../../assets/about/htmlcss.png")} />
              HTML CSS
            </div>
            <div className="box">
              <img src={require("../../assets/about/js.png")} />
              JavaScript
            </div>
            <div className="box">
              <img src={require("../../assets/about/react.png")} />
              React
            </div>
          </div>
        </Bounce>
      </div>
      <Zoom>
        <div className="text">
          <p>Introduce</p>
          <h1>Hello? I'm Shoxruh Abdumannobov</h1>
          <h3>Every great design begin with an even better story</h3>
          <p>
            I am Shoxruh. My last name is Abdumannobov. I'm{" "}
            {JSON.stringify(new Date()).substring(1, 5) - 2009} years old. I am
            Tajik. I can speak Russian, Uzbek, English and Tajik. I live in
            Uzbekistan in Angren. I was finishing an IT course. Experience as a
            Junior, front-end developer.
          </p>
          <h3>
            Skills: HTML, CSS, SCSS, JS, PUG, ReactJs, Python, Bootsrap, JQuery,
            Redux, react-tool-kit, Express. Node.js
          </h3>
        </div>
      </Zoom>
      <div className="block">
        <Bounce right cascade>
          <div>
            <div className="box">
              <img src={require("../../assets/about/redux.png")} />
              Redux
            </div>
            <div className="box">
              <img src={require("../../assets/about/ex.png")} />
              Express
            </div>
            <div className="box">
              <img src={require("../../assets/about/py.png")} />
              Python
            </div>
          </div>
        </Bounce>
      </div>
    </Style>
  );
};

export default About;
