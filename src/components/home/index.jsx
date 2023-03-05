import React from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { Button } from "../../utils";
import { Style } from "./style";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Style>
      <div className="box">
        <Bounce left cascade>
          <div className="skills">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Bounce>
      </div>
      <div className="box">
        <Fade top>
          <div className="image">
            <img src={require("../../assets/hero-1.png")} />
          </div>
        </Fade>
      </div>
      <div className="box">
        <div className="text">
          <h1>
            <Zoom top cascade>
              Talk Is Cheap
            </Zoom>
          </h1>
          <h1>
            <Zoom top cascade>
              Show Me The Code
            </Zoom>
          </h1>
          <p>
            <Zoom top cascade>
              I Design And Code Beautifully Simple Things And I Love What I Do
            </Zoom>
          </p>
          <Zoom left>
            <Button onClick={() => navigate("/about")}>About</Button>
          </Zoom>
        </div>
      </div>
    </Style>
  );
};

export default Home;
