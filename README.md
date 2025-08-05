# 🧠 AI-Driven Career Guidance Platform

An AI-powered career guidance web app that helps students explore suitable career paths based on their skills, interests, and regional job trends.

🛠️ Built for **Prayatna’25 Hackathon – PrayACThon**  
👥 **Team:** Digital-Dynamo  
📌 **Problem No:** 02  
👩‍💻 Team Members: Mohana, Amsa, Suganthi, Parthasarathi

---

## 🚀 Project Overview

This platform helps students make smarter career choices using:

- AI-powered **chatbot** for career advice
- A dynamic **questionnaire**
- **Skill-based mini-games**
- Region-specific **job suggestions**
- A personalized **career dashboard**

Built with Gemini (Google LLM) or OpenRouter API to power the AI engine.

---

## 📌 Key Features

- 🤖 **AI Chatbot:** Career assistant powered by Gemini AI
- 🧠 **Questionnaire:** Understands user interests and preferences
- 🎯 **SkillGame:** Interactive assessments to gauge abilities
- 📊 **Dashboard:** Visualizes results and job matches
- 🌍 **RegionJobs:** Filters jobs by location
- 📁 **Jobs Data:** Comes from a static `jobs.json` dataset or future real-time API

---

## 🧱 Project Structure

carrier-ai/

├── client/ # React frontend

│ ├── src/components/

│ ├── src/data/jobs.json

│ └── App.js

├── server/ # Express backend

│ ├── index.js

│ └── .env (not pushed)

└── README.md # This file



---

## ⚙️ Tech Stack

### 🌐 Frontend (`client/`)
- React.js
- Gemini AI or OpenRouter (via API)
- CSS modules
- Axios (for HTTP requests)
- Chart.js or similar (optional)

### 🔧 Backend (`server/`)
- Node.js + Express
- CORS
- dotenv (for API keys)
- body-parser
- Static job dataset (or extendable to DB)

---

## 🔁 Data Flow

1. User enters via the **React interface**
2. Chatbot or questionnaire collects input
3. User interacts with **SkillGame**
4. Axios sends data to Express backend
5. Backend returns job matches from `jobs.json` or other source
6. Dashboard and RegionJobs display results

---
## 🧪 How to Run Locally

---

### 🔹 Step 1: Setup Frontend

```bash
cd client
npm install
npm start
# App runs at http://localhost:3000
```

### 🔹 Step 2: Setup Backend (Optional)

```bash
cd ../server
npm install
node index.js
# Server runs at http://localhost:5000
```

### Create a .env file inside server/ and add:


API_KEY=your_gemini_or_openrouter_api_key

---
### ✨ Key Takeaways
---
Personalized, AI-powered career advice

Local job filtering

Built-in skill assessment modules

Modular and scalable architecture

---
 ### 📈 Next Steps
 ---
Integrate real-time job APIs

Add user authentication

Enhance recommendation engine with ML

Deploy to cloud (Netlify/Vercel + Render)

---
### 🙏 Thank You!
---
This is a step toward helping students make smarter career choices with technology.

 ### 📄 License
MIT License – free to use and modify.


