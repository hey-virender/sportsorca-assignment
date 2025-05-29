import Match from "../models/Match.js";

// Get all matches
export const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ message: "Error fetching matches", error: error.message });
  }
};

// Get match by ID
export const getMatchById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ message: "Error fetching match", error: error.message });
  }
};

// Create a new match
export const createMatch = async (req, res) => {
  try {
    const { homeTeam, awayTeam, matchDate, venue, description } = req.body;
    const newMatch = new Match({
      homeTeam,
      awayTeam,
      matchDate,
      venue,
      description,
    });
    const savedMatch = await newMatch.save();
    res.status(201).json(savedMatch);
  } catch (error) {
    res.status(400).json({ message: "Error creating match", error: error.message });
  }
};
