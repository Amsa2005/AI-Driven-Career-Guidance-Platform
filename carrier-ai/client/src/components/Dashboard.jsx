import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const regionFieldTrends = {
  Bangalore: ["Software Development", "AI/ML", "Cloud Computing"],
  Mumbai: ["Product Management", "Finance", "Consulting"],
  Hyderabad: ["Data Science", "AI/ML", "Backend Engineering"],
  Delhi: ["Government Tech", "Policy Consulting", "Management"],
  Chennai: ["Embedded Systems", "Automotive Design", "DevOps"],
  Pune: ["UI/UX Design", "QA Testing", "Frontend Development"],
};

const Dashboard = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const score = result?.score || { tech: 0, design: 0, management: 0 };
  const [selectedRegion, setSelectedRegion] = useState("Bangalore");

  const benchmarkData = [
    { name: "You", ...score },
    { name: "Avg Student", tech: 2, design: 2, management: 2 },
    { name: "Top 10%", tech: 3, design: 3, management: 3 },
  ];

  const sortedFields = Object.entries(score)
    .sort(([, a], [, b]) => b - a)
    .map(([field]) => field);

  const topSuggestions = sortedFields.slice(0, 2).map((field) => {
    if (field === "tech") return "Software Development";
    if (field === "design") return "UI/UX Design";
    if (field === "management") return "Product Management";
    return "";
  });

  const matchedField = regionFieldTrends[selectedRegion]?.find((field) =>
    topSuggestions.includes(field)
  );

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", backgroundColor: "#ffffff", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333", fontSize: "24px", marginBottom: "20px" }}>Your Recommended Career: {result?.recommendation}</h2>

      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "20px", color: "#333" }}>Score:</h3>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          <li style={{ fontSize: "16px", color: "#555" }}>Tech: {score.tech}</li>
          <li style={{ fontSize: "16px", color: "#555" }}>Design: {score.design}</li>
          <li style={{ fontSize: "16px", color: "#555" }}>Management: {score.management}</li>
        </ul>
      </div>

      <Link to="/chat">
        <button style={{
          backgroundColor: "#4caf50", color: "white", padding: "12px 20px", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", transition: "background-color 0.3s", display: "block", margin: "10px auto"
        }}>Talk to CareerBot</button>
      </Link>

      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "20px", color: "#333" }}>Select Your Region:</h3>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          style={{
            width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "16px"
          }}
        >
          {Object.keys(regionFieldTrends).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        {matchedField ? (
          <p style={{ fontSize: "16px", color: "#555" }}>
            Based on your strengths and market demand in <strong>{selectedRegion}</strong>, we recommend exploring <strong>{matchedField}</strong> roles!
          </p>
        ) : (
          <p style={{ fontSize: "16px", color: "#555" }}>
            Your profile is unique! Consider remote opportunities or upskilling in trending roles in <strong>{selectedRegion}</strong>.
          </p>
        )}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 style={{ fontSize: "20px", color: "#333" }}>Top Suggestions for You:</h3>
        <ol style={{ paddingLeft: "20px" }}>
          <li style={{ fontSize: "16px", color: "#555" }}>{topSuggestions[0]}</li>
          <li style={{ fontSize: "16px", color: "#555" }}>{topSuggestions[1]}</li>
        </ol>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={benchmarkData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="tech" fill="#8884d8" />
            <Bar dataKey="design" fill="#82ca9d" />
            <Bar dataKey="management" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ textAlign: "center" }}>
        <br />
        <center>
          <Link to="/skill-quiz" style={{ color: "#007bff", fontSize: "16px", textDecoration: "none" }}>FUN SKILL QUIZ</Link>
        </center>
        <Link to="/region-jobs" style={{ color: "#007bff", fontSize: "16px", textDecoration: "none" }}>Jobs Near You</Link><br />
        <Link to="/benchmark" style={{ color: "#007bff", fontSize: "16px", textDecoration: "none" }}>Your Skill Rank</Link><br />
        <Link to="/skill-game" style={{ color: "#007bff", fontSize: "16px", textDecoration: "none" }}>Level Up!</Link><br />
      </div>
    </div>
  );
};

export default Dashboard;
