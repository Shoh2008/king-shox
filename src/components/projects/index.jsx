import React from "react";
import { Style } from "./style";
import { Button } from "../../utils";
import { Bounce } from "react-reveal";

const Projects = () => {
  return (
    <Style>
      {
        require("./data.json").map((item, index) => {
          return (index) % 2 === 0 ?
            <Bounce>
              <div className="card-1" key={index}>
                <div className="image">
                  <div className="box"></div>
                  <div className="card"></div>
                  <div className="img">
                    <img src={require("../../assets/projects-image/" + item?.image)} />
                  </div>
                </div>
                <div className="info">
                  <h1>{item?.title}</h1>
                  <a target="_blank" href={item?.source}>
                    <Button>Check This Project</Button>
                  </a>
                  <a target="_blank" href={`https://github.com/Shoh2008/${item?.code}`}>
                    <Button>
                      <img src={require("../../assets/github.png")} className="gitimg" />{" "}
                      Github Code
                    </Button>
                  </a>
                  <h3>
                    <div
                      style={
                        item?.language === "JavaScript"
                          ? { background: "yellow" }
                          : { background: "#33DAFF" }
                      }
                    ></div>
                    {item?.language}
                  </h3>
                </div>
              </div></Bounce> : <Bounce>
              <div className="card-2">
                <div className="info">
                  <h1>{item?.title}</h1>
                  <a target="_blank" href={item?.source}>
                    <Button>Check This Project</Button>
                  </a>
                  <a target="_blank" href={`https://github.com/Shoh2008/${item?.code}`}>
                    <Button>
                      <img src={require("../../assets/github.png")} className="gitimg" />{" "}
                      Github Code
                    </Button>
                  </a>
                  <h3>
                    <div
                      style={
                        item?.language === "JavaScript"
                          ? { background: "yellow" }
                          : { background: "#33DAFF" }
                      }
                    ></div>
                    {item?.language}
                  </h3>
                </div>
                <div className="image">
                  <div className="box"></div>
                  <div className="card"></div>
                  <div className="img">
                    <img src={require("../../assets/projects-image/" + item?.image)} />
                  </div>
                </div>
              </div></Bounce>
        })
      }
    </Style>
  );
};

export default Projects;