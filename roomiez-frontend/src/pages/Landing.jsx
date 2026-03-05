import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Landing = () => {

  const navigate = useNavigate();

  return (

    <div style={{ background: "#FFFDF8", minHeight: "100vh" }}>

      <Navbar />

      {/* HERO SECTION */}

      <div style={styles.hero}>

        <div style={styles.left}>

          <p style={styles.tag}>🏠 Student Housing Made Simple</p>

          <h1 style={styles.title}>
            Find Your Perfect <span style={{ color: "#FF6F61" }}>Roommate</span>, Stress-Free.
          </h1>

          <p style={styles.subtitle}>
            Answer a few lifestyle questions and we’ll match you with
            compatible roommates instantly.
          </p>

          <div style={styles.buttons}>

            <button
              style={styles.primary}
              onClick={() => navigate("/questionnaire")}
            >
              Get Started →
            </button>

            <button
              style={styles.secondary}
              onClick={() => navigate("/matches")}
            >
              See Matches
            </button>

          </div>

        </div>

        <div style={styles.right}>

          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
            alt="students"
            style={styles.heroImage}
          />

        </div>

      </div>


      {/* FEATURES SECTION */}

      <div style={styles.featuresSection}>

        <h2>Finding a roommate has never been this easy</h2>

        <div style={styles.featuresGrid}>

          <div style={styles.featureCard}>
            <h4>Create Your Profile</h4>
            <p>Tell us about your lifestyle and housing preferences.</p>
          </div>

          <div style={styles.featureCard}>
            <h4>Take the Quiz</h4>
            <p>Answer our compatibility questionnaire.</p>
          </div>

          <div style={styles.featureCard}>
            <h4>Match & Chat</h4>
            <p>Find roommates who fit your lifestyle.</p>
          </div>

        </div>

      </div>


      {/* CTA SECTION */}

      <div style={styles.cta}>

        <h2>Ready to find your match?</h2>

        <button
          style={styles.primary}
          onClick={() => navigate("/questionnaire")}
        >
          Start Questionnaire
        </button>

      </div>

    </div>

  );

};

const styles = {

  hero: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    maxWidth: "1100px",
    margin: "60px auto",
    gap: "40px"
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  right: {},

  tag: {
    background: "#FFE8E6",
    color: "#FF6F61",
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px"
  },

  title: {
    fontSize: "40px",
    lineHeight: "1.2"
  },

  subtitle: {
    color: "#666"
  },

  buttons: {
    display: "flex",
    gap: "15px"
  },

  primary: {
    background: "#FF6F61",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  secondary: {
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "8px",
    cursor: "pointer"
  },

  heroImage: {
    width: "100%",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
  },

  featuresSection: {
    maxWidth: "1100px",
    margin: "80px auto",
    textAlign: "center"
  },

  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    marginTop: "30px"
  },

  featureCard: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
  },

  cta: {
    background: "#0F172A",
    color: "white",
    textAlign: "center",
    padding: "60px",
    marginTop: "60px"
  }

};

export default Landing;