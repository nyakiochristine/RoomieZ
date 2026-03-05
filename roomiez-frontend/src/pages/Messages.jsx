import React from "react";
import Navbar from "../components/Navbar";

const Messages = () => {

  return (

    <div style={{ background: "#F6F6F6", minHeight: "100vh" }}>

      <Navbar />

      <div style={{ maxWidth: "900px", margin: "40px auto" }}>

        <h1>Messages</h1>

        <p>Your conversations will appear here.</p>

      </div>

    </div>

  );

};

export default Messages;