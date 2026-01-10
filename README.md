🧠 MERN AI Flow — Prompt → Response Flow App

A visual AI flow builder where users can enter a prompt, receive an AI-generated response, and optionally save it to the database — all represented using a node-based UI via React Flow.

🚀 Live Demo

Frontend: https://mern-ai-flow-xi.vercel.app

Backend API: https://mern-ai-flow-c4dn.onrender.com

✨ Features

✔ Node-based UI using React Flow
✔ AI-powered response via OpenRouter API
✔ Save prompt + response to MongoDB
✔ Fully deployed (Frontend + Backend)
✔ CORS configured
✔ Environment variable support
✔ Works on Vercel + Render

🎬 Demo Preview

Below is an example flow showing prompt → AI response → save action.

🟦 Step 1 — Enter Prompt

🟨 Step 2 — AI is generating response

🟩 Step 3 — Response ready + Save option

(MongoDB storage screenshot intentionally excluded for privacy)

🖥️ Tech Stack
Frontend

React (Vite)

React Flow

React Toastify

Vercel Hosting

Backend

Node.js + Express

MongoDB + Mongoose

OpenRouter AI API

CORS

Render Hosting

Database

MongoDB Atlas (Cloud)

📂 Folder Structure
mern-ai-flow/
 ├── client/          # React frontend
 ├── server/          # Node + Express backend
 └── assets/          # Screenshot assets for README
      └── Demo/

📡 API Endpoints
POST /api/ask-ai

Send prompt → receive AI response

{
  "prompt": "What is the purpose of life?"
}

POST /api/save-response

Persist data to MongoDB

{
  "prompt": "...",
  "response": "..."
}

🔐 Environment Variables
Frontend (.env)
VITE_API_BASE_URL=https://mern-ai-flow-c4dn.onrender.com

Backend (.env)
OPENROUTER_API_KEY=your_openrouter_key
MONGO_URI=your_mongodb_uri

🛠️ Local Development Setup

Clone the repository:

git clone https://github.com/BhavyaLuthra18/mern-ai-flow.git
cd mern-ai-flow


Install frontend:

cd client
npm install
npm run dev


Install backend:

cd ../server
npm install
npm run dev

🌍 Deployment Info
Service	Platform
Frontend	Vercel
Backend	Render
Database	MongoDB Atlas
📦 Dependencies Overview
Frontend

react

react-flow

react-toastify

vite

Backend

express

mongoose

dotenv

cors

node-fetch
