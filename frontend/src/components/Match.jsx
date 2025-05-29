import React from "react";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

const Match = ({
  homeTeam,
  awayTeam,
  matchDate,
  venue,
  description,
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-100 rounded-2xl shadow-lg p-8 max-w-md mx-auto my-6 text-slate-800 font-sans hover:scale-[1.02] transition-transform">
      <div className="text-2xl font-bold mb-2 text-indigo-700 tracking-wide text-center">
        Upcoming Match
      </div>
      <div className="flex flex-col items-center justify-between font-semibold mb-2">
        <span>{homeTeam}</span>
        <span className="text-slate-400 font-bold mx-2">vs</span>
        <span>{awayTeam}</span>
      </div>
      <div className="text-base text-slate-600 mb-1 flex items-center gap-2">
        <span role="img" aria-label="calendar">📅</span>
        {formatDate(matchDate)}
      </div>
      <div className="text-base text-slate-600 mb-2 flex items-center gap-2">
        <span role="img" aria-label="stadium">🏟️</span>
        {venue}
      </div>
      {description && (
        <div className="text-indigo-500 italic mt-2">
          {description}
        </div>
      )}
    </div>
  );
};

export default Match;

