import React from "react";

const ProfileHeader = ({ profile }) => {

  return (

    <div style={styles.container}>

      <div style={styles.banner}></div>

      <div style={styles.content}>

        <img
          src="https://i.pravatar.cc/120"
          alt="profile"
          style={styles.avatar}
        />

        <div>

          <h2>{profile?.name || "Your Name"}</h2>

          <p style={{ color: "#777" }}>
            Student Profile
          </p>

          <p style={{ color: "#999" }}>
            Roommate Finder
          </p>

        </div>

      </div>

    </div>

  );

};

const styles = {

  container: {
    background: "white",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
  },

  banner: {
    height: "120px",
    background: "linear-gradient(90deg,#FF8A65,#66BB6A)"
  },

  content: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px"
  },

  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    border: "4px solid white",
    marginTop: "-60px"
  }

};

export default ProfileHeader;