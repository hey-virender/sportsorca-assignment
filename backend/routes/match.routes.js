import express from "express";
import {
  getAllMatches,
  getMatchById,
  createMatch,
} from "../controllers/match.controller.js";

const router = express.Router();

// GET /api/matches - Get all matches
router.get("/", getAllMatches);

// GET /api/matches/:id - Get match by ID
router.get("/:id", getMatchById);

// POST /api/matches - Create a new match
router.post("/", createMatch);

export default router;
