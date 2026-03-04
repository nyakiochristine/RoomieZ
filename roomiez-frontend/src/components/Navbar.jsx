import React from "react";

const Navbar = () => {
  return (
    <div style={styles.nav}>
      <div style={styles.logo}>RoomieZ</div>

      <div style={styles.links}>
        <span>Dashboard</span>
        <span style={{ color: "#FF6F61", fontWeight: "600" }}>Find Roommates</span>
        <span>Messages</span>
        <span>Profile</span>
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
    borderBottom: "1px solid #eee",
  },
  logo: {
    fontWeight: "700",
    fontSize: "18px",
  },
  links: {
    display: "flex",
    gap: "30px",
    color: "#666",
  },
  avatar: {
    fontSize: "22px",
  },
};

export default Navbar;