# ⚽ Football Match Scheduler

A full-stack web application to display upcoming football matches. Built with **Express.js** backend and **Vite + React** frontend, using **MongoDB** as the database.

---

## ⚙️ Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or remote instance)

---

## 🌐 Environment Variables

### Backend (`/backend/.env`)

```env
MONGO_URI=your_mongodb_connection_string
```

## Frontend (/frontend/.env)
```env
VITE_API_BASE_URL=http://localhost:5000
```
## 1. Clone the Repository
```
git clone https://github.com/your-username/football-match-scheduler.git
cd football-match-scheduler
```
## 2. Setup and Run Backend
```
cd backend
npm install
node index.js
```
Backend will run on http://localhost:3000

## 3. Setup and Run Frontend
```
cd ../frontend
npm install
npm run dev
```
Frontend will be available at http://localhost:5173

🛠 Tech Stack
Frontend: React, Vite
Backend: Node.js, Express.js
Database: MongoDB

