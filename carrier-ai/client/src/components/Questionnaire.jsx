import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const questions = [
  "I enjoy solving puzzles and logic problems.",
  "I get excited about learning new technologies.",
  "I’m comfortable writing code.",
  "I identify more as a coder or designer?",
  "Which output feels more exciting?",
  "What time complexity is best for performance?",
  "What does 'matrix' mean to you?",
  "Binary addition of 5 + 6 = ?",
  "Pick one language to learn deeply.",
  "How do you prefer to learn?",
  "How often do you practice coding/design?",
  "Do you enjoy collaborating with others?",
  "Rate your patience with debugging (1-5)",
  "What do you do when stuck on a problem?",
  "How do you feel when handling multiple tasks?"
];

const options = [
  ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
  ["Excited", "Curious", "Neutral", "Bored"],
  ["Very Comfortable", "Somewhat Comfortable", "Not Comfortable"],
  ["Coder", "Designer"],
  ["[3, 2, 1]", "Apps/Web", "UI/UX"],
  ["O(n)", "O(log n)", "O(n^2)"],
  ["matrix", "grid", "equation", "design"],
  ["10", "11", "12"],
  ["JavaScript", "Python", "HTML/CSS"],
  ["Building projects", "Reading docs/books", "Live classes", "Video tutorials"],
  ["Daily", "Weekly", "Monthly", "Rarely"],
  ["Yes", "Sometimes", "No"],
  ["1", "2", "3", "4", "5"],
  ["Look for help", "Try again", "Give up", "Ask a friend"],
  ["Focused", "Neutral", "Overwhelmed"]
];

const Questionnaire = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const navigate = useNavigate();

  const handleSelect = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = async () => {
    if (answers.includes("")) {
      alert("Please answer all questions before submitting.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/analyze", {
        answers,
      });
      localStorage.setItem("result", JSON.stringify(res.data));
      navigate("/dashboard");
    } catch (err) {
      console.error("Error submitting questionnaire:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333", fontSize: "24px", marginBottom: "20px" }}>Career AI Questionnaire</h2>

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: "15px" }}>
          <label style={{ fontSize: "16px", color: "#555" }}>{q}</label>
          <select
            value={answers[i]}
            onChange={(e) => handleSelect(i, e.target.value)}
            style={{
              width: "100%", padding: "10px", marginTop: "10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "16px", color: "#555"
            }}
          >
            <option value="">-- Select an option --</option>
            {options[i] ? (
              options[i].map((opt, j) => (
                <option key={j} value={opt}>
                  {opt}
                </option>
              ))
            ) : (
              <option disabled>Options not available</option>
            )}
          </select>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#007bff", color: "white", padding: "12px 20px", border: "none", borderRadius: "6px", fontSize: "16px", cursor: "pointer", transition: "background-color 0.3s", display: "block", width: "100%", marginTop: "20px"
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Questionnaire;
