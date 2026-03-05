import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (

    <div style={styles.nav}>

      <div style={styles.logo}>
        <NavLink to="/" style={styles.logoLink}>
          RoomieZ
        </NavLink>
      </div>

      <div style={styles.links}>

        <NavLink
          to="/"
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/matches"
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Find Roommates
        </NavLink>

        <NavLink
          to="/messages"
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Messages
        </NavLink>

        <NavLink
          to="/profile"
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Profile
        </NavLink>

      </div>

      <div style={styles.avatar}>👤</div>

    </div>

  );

};

const styles = {

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "white",
    borderBottom: "1px solid #eee"
  },

  logo: {
    fontWeight: "700",
    fontSize: "18px"
  },

  logoLink: {
    textDecoration: "none",
    color: "#000"
  },

  links: {
    display: "flex",
    gap: "30px",
    alignItems: "center"
  },

  link: {
    textDecoration: "none",
    color: "#666",
    fontWeight: "500"
  },

  activeLink: {
    textDecoration: "none",
    color: "#FF6F61",
    fontWeight: "600"
  },

  avatar: {
    fontSize: "22px"
  }

};

export default Navbar;