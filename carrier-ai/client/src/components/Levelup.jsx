import React from "react";

const resources = {
  tech: ["JavaScript.info", "freeCodeCamp", "CS50 by Harvard"],
  design: ["Figma tutorials", "Adobe XD courses", "UI Design patterns"],
  management: ["Scrum Guide", "Trello Guide", "Coursera PM Specialization"],
};

const LevelUp = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const score = result?.score || {};
  const lowestField = Object.entries(score).sort((a, b) => a[1] - b[1])[0]?.[0];

  return (
    <div style={{
      padding: "30px",
      maxWidth: "700px",
      margin: "40px auto",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <h2 style={{
        color: "#333",
        fontSize: "26px",
        textAlign: "center",
        marginBottom: "20px"
      }}>  Level Up Your Skills</h2>

      <p style={{ fontSize: "18px", color: "#555", textAlign: "center" }}>
        Based on your results, we recommend improving in <strong style={{ color: "#007bff" }}>{lowestField}</strong>:
      </p>

      <ul style={{ marginTop: "20px", paddingLeft: "20px", listStyleType: "circle" }}>
        {resources[lowestField]?.map((res, idx) => (
          <li key={idx} style={{ marginBottom: "10px" }}>
            <a
              href={`https://www.google.com/search?q=${res}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontSize: "16px"
              }}
            >
              {res}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LevelUp;


