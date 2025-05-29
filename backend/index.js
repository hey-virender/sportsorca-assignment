import express from "express";
import connectToMongoDB from "./config/db.js";
import matchRoutes from "./routes/match.routes.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const PORT = 3000;
dotenv.config();

connectToMongoDB();
app.use(
  cors({
    origin: "*",
  }),
);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/api/matches", matchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
