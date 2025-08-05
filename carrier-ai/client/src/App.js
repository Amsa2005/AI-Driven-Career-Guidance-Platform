
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questionnaire from "./components/Questionnaire";
import Chatbot from "./components/Chatbot";
import Dashboard from "./components/Dashboard";
import RegionJobs from "./components/RegionJobs";
import SkillGame from "./components/SkillGame";
import SkillRank from "./components/Skillrank";
import LevelUp from "./components/Levelup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skill-quiz" element={<LevelUp />} />
        <Route path="/region-jobs" element={<RegionJobs />} />
        <Route path="/skill-game" element={<SkillGame />} />
        <Route path="/benchmark" element={<SkillRank />} />
      </Routes>
    </Router>
  );
}

export default App;
