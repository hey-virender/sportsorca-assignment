import mongoose from "mongoose";
import Match from "./models/Match.js";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;

const matches = [
  {
    homeTeam: "Manchester United",
    awayTeam: "Chelsea",
    matchDate: new Date("2024-08-15T19:00:00Z"),
    venue: "Old Trafford",
    description: "Premier League opening match.",
  },
  {
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    matchDate: new Date("2024-09-01T20:00:00Z"),
    venue: "Santiago Bernabéu",
    description: "El Clásico showdown.",
  },
  {
    homeTeam: "Bayern Munich",
    awayTeam: "Borussia Dortmund",
    matchDate: new Date("2024-09-10T18:30:00Z"),
    venue: "Allianz Arena",
    description: "Bundesliga top clash.",
  },
  {
    homeTeam: "Juventus",
    awayTeam: "AC Milan",
    matchDate: new Date("2024-09-20T19:45:00Z"),
    venue: "Allianz Stadium",
    description: "Serie A classic.",
  },
];

async function seedMatches() {
  try {
    await mongoose.connect(MONGODB_URI);
    await Match.deleteMany();
    await Match.insertMany(matches);
    console.log("Database seeded with upcoming matches!");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    await mongoose.disconnect();
  }
}

seedMatches();
