import React, { useEffect, useState } from "react";
import Match from "./components/Match";
import axios from "./api/axiosInstance";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await axios.get("/matches");
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
        setError("Failed to fetch matches");
      } finally {
        setLoading(false);
      }
    }
    fetchMatches();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      <main className="flex-1 container mx-auto px-4">
        {loading && (
          <div className="text-center text-indigo-500 py-12 text-lg">
            Loading matches...
          </div>
        )}
        {error && (
          <div className="text-center text-red-500 py-12 text-lg">{error}</div>
        )}
        {!loading && !error && matches.length === 0 && (
          <div className="text-center text-slate-500 py-12 text-lg">
            No matches found.
          </div>
        )}
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {matches.map((match) => (
            <Match
              key={
                match.id ||
                `${match.homeTeam}-${match.awayTeam}-${match.matchDate}`
              }
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              matchDate={match.matchDate}
              venue={match.venue}
              description={match.description}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
