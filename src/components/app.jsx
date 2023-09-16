import React from "react";
import Profile from "./profile/profile";
import Bio from "./profile/bio";
import Skills from "./profile/skills";

function app() {
  return (
    <div>
      <Profile />
      <Bio name="Test User" title="Test title" />
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <h3 style={{ marginBottom: "20px" }}>List of Programmers</h3>
        <p>Mr. X</p>
        <Skills skillA="React" skillB="Angular" skillC="Vue" />
        <p>Mr. Y</p>
        <Skills skillA="NodeJS" skillB="ExpressJs" skillC="MongoDB" />
      </div>
    </div>
  );
}

export default app;
