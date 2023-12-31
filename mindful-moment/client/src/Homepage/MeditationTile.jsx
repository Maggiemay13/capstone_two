// src/components/MeditationTile.js
import React from "react";
import Tile from "./Tile";

const MeditationTile = ({ onClick }) => {
  return (
    <Tile
      title="Meditation"
      description="Calm your mind with guided meditation sessions."
      imageUrl="https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      onClick={onClick}
    />
  );
};

export default MeditationTile;

// https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
