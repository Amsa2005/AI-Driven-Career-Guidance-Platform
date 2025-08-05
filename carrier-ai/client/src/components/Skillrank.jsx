// client/src/components/SkillRank.jsx

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SkillRank = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const score = result?.score || { tech: 0, design: 0, management: 0 };

  const benchmarkData = [
    { name: "You", ...score },
    { name: "Avg Student", tech: 2, design: 2, management: 2 },
    { name: "Top 10%", tech: 3, design: 3, management: 3 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Skill Rank Compared to Peers</h2>
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
  );
};

export default SkillRank;

