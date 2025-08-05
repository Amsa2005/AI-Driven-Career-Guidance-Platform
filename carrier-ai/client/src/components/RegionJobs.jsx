
import React, { useState } from "react";
import jobData from "../data/jobs.json";

const RegionJobs = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    const regionData = jobData.find((r) => r.region === region);
    setJobs(regionData ? regionData.jobs : []);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h3 style={{ textAlign: "center", fontSize: "22px", color: "#333" }}>Select Your Region</h3>
      
      <select
        onChange={handleRegionChange}
        style={{
          width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "16px", marginBottom: "20px", color: "#555"
        }}
      >
        <option value="">Select Region</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Karnataka">Karnataka</option>
      </select>

      <h4 style={{ color: "#333", fontSize: "20px" }}>Jobs in {selectedRegion}:</h4>
      
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
        {jobs.map((job, index) => (
          <li key={index} style={{ padding: "8px", backgroundColor: "#f1f1f1", margin: "5px 0", borderRadius: "6px", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)" }}>
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionJobs;
