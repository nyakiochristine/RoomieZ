import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Questionnaire from "./pages/Questionnaire";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Matches from "./pages/Matches";
import Messages from "./pages/Messages";

import "./App.css";

function App() {

  return (

    <Router>

      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/messages" element={<Messages />} />

      </Routes>

    </Router>

  );

}

export default App;