import React from "react";
import "./index.css";

export default function LeaderBoard() {
  return (
    <div className={("card", "board")}>
      <div className="card-body col-12 bg-warning">
        <h1>Leaderboard</h1>
        <hr />
        <h2>Nick -35</h2>
        <h2>Babloo -23</h2>
      </div>
    </div>
  );
}
