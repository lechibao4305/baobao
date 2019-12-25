import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideNav.css";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu>
      <h2>Natsu_Itou</h2>
      <a className="menu-item" href="/">
        <i style={{ marginRight: 20 }} class="fas fa-home"></i>
        ManagerProduct
      </a>

      <Link onClick={() => localStorage.removeItem("token")} to="/login">
        <i style={{ marginRight: 20 }} class="fas fa-sign-out-alt"></i>
        Logout
      </Link>
    </Menu>
  );
};
