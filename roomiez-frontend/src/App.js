import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Questionnaire from "./pages/Questionnaire";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

import "./App.css";

function App() {

  return (

    <Router>

      <Routes>

        {/* Questionnaire Page */}
        <Route path="/" element={<Questionnaire />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />
        {/* Edit Profile Page */}
        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>

    </Router>

  );

}

export default App;