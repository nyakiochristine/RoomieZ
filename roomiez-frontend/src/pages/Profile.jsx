import React from "react";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import AboutCard from "../components/AboutCard";
import LifestyleCard from "../components/LifestyleCard";
import BudgetCard from "../components/BudgetCard";
import ProfileStrength from "../components/ProfileStrength";
import LookingFor from "../components/LookingFor";
import Snapshots from "../components/Snapshots";

const Profile = () => {

  const answers = JSON.parse(localStorage.getItem("roomieAnswers")) || {};

  const profile = {
    name: "Your Name",
    budgetMin: 500,
    budgetMax: 900,
    roomType: "shared"
  };

  return (
    <div style={{ background: "#F6F6F6", minHeight: "100vh" }}>

      <Navbar />

      <div style={{ maxWidth: "1100px", margin: "40px auto" }}>

        <ProfileHeader profile={profile} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginTop: "20px"
          }}
        >

          <div>

            <AboutCard />
            <LifestyleCard answers={answers} />
            <Snapshots />

          </div>

          <div>

            <BudgetCard profile={profile} />
            <ProfileStrength />
            <LookingFor />

          </div>

        </div>

      </div>

    </div>
  );

};

export default Profile;