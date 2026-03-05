import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const EditProfile = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budgetMin: "",
    budgetMax: "",
    roomType: ""
  });

  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const res = await fetch("http://localhost:5000/profile");

        const data = await res.json();

        setFormData({
          name: data.name || "",
          phone: data.phone || "",
          budgetMin: data.budgetMin || "",
          budgetMax: data.budgetMax || "",
          roomType: data.roomType || ""
        });

      } catch (err) {

        console.log("Backend not connected yet");

      }

    };

    fetchProfile();

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await fetch("http://localhost:5000/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      alert("Profile updated!");

      window.location.href = "/profile";

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div style={{ background: "#F6F6F6", minHeight: "100vh" }}>

      <Navbar />

      <div style={{ maxWidth: "700px", margin: "40px auto" }}>

        <div style={styles.card}>

          <h2>Edit Profile</h2>

          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <label>Minimum Budget</label>
            <input
              type="number"
              name="budgetMin"
              value={formData.budgetMin}
              onChange={handleChange}
            />

            <label>Maximum Budget</label>
            <input
              type="number"
              name="budgetMax"
              value={formData.budgetMax}
              onChange={handleChange}
            />

            <label>Room Type</label>

            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
            >

              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="apartment">Apartment</option>
              <option value="shared">Shared</option>

            </select>

            <button type="submit" style={styles.button}>
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

const styles = {

  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },

  button: {
    marginTop: "20px",
    background: "#FF6F61",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer"
  }

};

export default EditProfile;