import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/axios";

const Matches = () => {

  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMatches = async () => {

      try {

        const res = await api.get("/matches");

        setMatches(res.data.matches);
        setLoading(false);

      } catch (err) {

        console.error("Failed to fetch matches:", err);
        setLoading(false);

      }

    };

    fetchMatches();

  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          Loading matches...
        </p>
      </div>
    );
  }

  return (

    <div style={{ background: "#F6F6F6", minHeight: "100vh" }}>

      <Navbar />

      <div style={{ maxWidth: "1100px", margin: "40px auto" }}>

        <h1>Find Roommates</h1>

        <div style={styles.grid}>

          {matches.map((match, index) => (

            <div key={index} style={styles.card}>

              <img
                src="https://i.pravatar.cc/120"
                alt="avatar"
                style={styles.avatar}
              />

              <h3>{match.profile.name}</h3>

              <p style={{ color: "#777" }}>
                Budget: KSh {match.profile.budgetMin} - {match.profile.budgetMax}
              </p>

              <div style={styles.score}>
                {match.compatibility}% Match
              </div>

              <button style={styles.button}>
                View Profile
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

const styles = {

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
    marginTop: "20px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
  },

  score: {
    background: "#FFE8E6",
    color: "#FF6F61",
    padding: "6px 12px",
    borderRadius: "10px",
    display: "inline-block",
    margin: "10px 0",
  },

  button: {
    background: "#FF6F61",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  }

};

export default Matches;