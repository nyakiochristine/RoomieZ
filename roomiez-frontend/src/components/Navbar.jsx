import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.nav}>

      <div style={styles.logo}>
        <Link to="/" style={styles.link}>RoomieZ</Link>
      </div>

      <div style={styles.links}>

        <Link to="/" style={styles.link}>
          Dashboard
        </Link>

        <span style={{ color: "#FF6F61", fontWeight: "600" }}>
          Find Roommates
        </span>

        <span>
          Messages
        </span>

        <Link to="/profile" style={styles.link}>
          Profile
        </Link>

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

  links: {
    display: "flex",
    gap: "30px",
    color: "#666",
    alignItems: "center"
  },

  avatar: {
    fontSize: "22px"
  },

  link: {
    textDecoration: "none",
    color: "#666"
  }

};

export default Navbar;