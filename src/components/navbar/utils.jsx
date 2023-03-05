import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Anchor = ({ link }) => {
  const location = useLocation();
  return (
    <NavLink
      to={`/${link}`}
      className={location.pathname === `/${link}` ? "active" : ""}
    >
      {link.charAt(0).toUpperCase() + link.substring(1, 10)}
    </NavLink>
  );
};

export default Anchor;
