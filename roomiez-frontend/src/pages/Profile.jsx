import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import AboutCard from "../components/AboutCard";
import LifestyleCard from "../components/LifestyleCard";
import BudgetCard from "../components/BudgetCard";
import ProfileStrength from "../components/ProfileStrength";
import LookingFor from "../components/LookingFor";
import Snapshots from "../components/Snapshots";
import api from "../api/axios";

const Profile = () => {

  const [profile, setProfile] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {

    const fetchUser = async () => {

      try {

        const res = await api.get("/auth/me");

        setProfile(res.data.profile || null);

        if (res.data.questionnaire) {
          setAnswers(res.data.questionnaire);
          localStorage.setItem(
            "roomieAnswers",
            JSON.stringify(res.data.questionnaire)
          );
        }

      } catch (err) {

        console.error("Failed to load profile", err);

      }

    };

    fetchUser();

  }, []);

  const saveProfile = async () => {

    try {

      const res = await api.post("/profile/update", profile);

      setProfile(res.data);

    } catch (err) {

      console.error("Profile save failed", err);

    }

  };

  if (!profile) {

    return (

      <div style={{ background: "#F6F6F6", minHeight: "100vh" }}>

        <Navbar />

        <div style={{ textAlign: "center", marginTop: "80px" }}>

          <h2>Create Your Profile</h2>

          <button
            onClick={() =>
              setProfile({
                name: "",
                phone: "",
                budgetMin: 5000,
                budgetMax: 15000,
                roomType: "shared"
              })
            }
            style={styles.button}
          >
            Create Profile
          </button>

        </div>

      </div>

    );

  }

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

            <AboutCard profile={profile} />
            <LifestyleCard answers={answers} />
            <Snapshots />

          </div>

          <div>

            <BudgetCard profile={profile} />

            <ProfileStrength />

            <LookingFor />

            <button
              onClick={saveProfile}
              style={styles.saveButton}
            >
              Save Profile
            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

const styles = {

  button: {
    background: "#FF6F61",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  saveButton: {
    marginTop: "20px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer"
  }

};

export default Profile;