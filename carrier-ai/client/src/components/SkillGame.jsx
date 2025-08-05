import React, { useState } from "react";

const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of these"],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Django", "Laravel", "React", "Flask"],
    answer: "React",
  },
  {
    question: "What is the time complexity of quicksort (average case)?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n log n)",
  },
];

const SkillQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOption = (opt) => {
    if (opt === questions[current].answer) {
      setScore(score + 1);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px", backgroundColor: "#f4f4f4", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333", fontSize: "28px" }}>  Skill Quiz - Level Up!</h2>
      {!showResult ? (
        <div>
          <p style={{ fontSize: "18px", marginBottom: "10px" }}><strong>Q{current + 1}:</strong> {questions[current].question}</p>
          {questions[current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOption(opt)}
              style={{
                display: "block",
                width: "100%",
                padding: "12px",
                margin: "10px 0",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: "#4caf50", fontSize: "24px" }}>  You scored {score} out of {questions.length}</h3>
          <p style={{ fontSize: "18px", color: "#333" }}>{score === questions.length ? "Excellent!  " : "Keep practicing  "}</p>
        </div>
      )}
    </div>
  );
};

export default SkillQuiz;

