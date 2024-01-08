import React, { useContext } from "react";
import JournalTile from "../Tiles/JournalTile";
import ResourcesTile from "../Tiles/ResourcesTile";
import ChooseTile from "../Tiles/ChooseTile";

import "./Homepage.css";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const handleJournalClick = () => {
    // Handle click for the Journal tile
    console.log("Journal tile clicked");
  };

  const handleResourcesClick = () => {
    // Handle click for the Resources tile
    console.log("Resources tile clicked");
  };

  const handleMeditationClick = () => {
    // Handle click for the Meditation tile
    console.log("Meditation tile clicked");
  };

  return (
    <div className="hompage">
      <div className="heading">
        <h1 className="mb-4 font-weight-bold">MindfulMoment</h1>
        <p className="lead">
          Welcome to MindfulMoment, where every moment is an oppertunity for
          mindful rejuvenation.
        </p>
      </div>
      <div className="tiles-container">
        <ChooseTile onClick={handleMeditationClick} />
        <JournalTile onClick={handleJournalClick} />
        <ResourcesTile onClick={handleResourcesClick} />
      </div>
    </div>
  );
}

export default Homepage;
