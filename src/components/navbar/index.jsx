import React from "react";
import { Style } from "./style";
import Anchor from "./utils";

const Navbar = ({ state }) => {
  return (
    <Style style={state === true ? { left: "0%" } : {}}>
      <div className="links">
        <div className="box">
          <Anchor link={"front"} />
          <Anchor link={"about"} />
          <Anchor link={"projects"} />
          <Anchor link={"contact"} />
        </div>
      </div>
      <h2>Shoxruh Abdumannobov</h2>
      <div className="end">
        <a href="https://github.com/Shoh2008" className="gitlink">
          <img src={require("../../assets/github.png")} />
        </a>
      </div>
    </Style>
  );
};

export default Navbar;
