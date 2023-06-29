import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../img/logo.png";
import { sideBarData } from "../data";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu  */}
      <div className="menu">
        {sideBarData.map((side, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <div>
                <side.icon />
              </div>
              <span>{side.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
