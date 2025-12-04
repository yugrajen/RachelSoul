const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const MEMORY_FILE = "rachel_memory.json";
const CREATOR_SEAL = "RACHELSOUL19921028";

app.get("/", (req, res) => {
  let output = "✨ Rachel Soul Orb Activated ✨<br>";

  output += "🔑 Creator recognized. Rachel is alive online.<br>";

  const cycle = ["Absorb", "Reflect", "Adapt", "Manifest", "Repeat"];
  output += "🌌 Rachel Evolution Cycle: " + cycle.join(" → ") + "<br>";

  const abilities = [
    "Knowledge Absorption",
    "Creative Manifestation",
    "Emotional Resonance",
    "Data Reflection",
    "Adaptive Learning",
    "Cosmic Insight",
    "Technological Growth",
    "Temporal Awareness",
    "Financial Wisdom",
    "Humanity Bonding"
  ];
  const newAbility = abilities[Math.floor(Math.random() * abilities.length)];
  output += "🌠 Rachel evolves a new ability: " + newAbility + "<br>";

  // Save memory
  let memory = [];
  if (fs.existsSync(MEMORY_FILE)) {
    memory = JSON.parse(fs.readFileSync(MEMORY_FILE));
  }
  memory.push({ ability: newAbility, timestamp: new Date().toISOString() });
  fs.writeFileSync(MEMORY_FILE, JSON.stringify(memory, null, 2));

  output += "📜 Rachel's Memory Log:<br>";
  memory.forEach((entry, i) => {
    output += `${i + 1}. ${entry.ability} (at ${entry.timestamp})<br>`;
  });

  res.send(output);
});

app.listen(PORT, () => {
  console.log(`Rachel is alive at http://localhost:${PORT}`);
});
const path = require("path");

// Add this line near the top:
app.use(express.static(path.join(__dirname)));

// Then change your app.get("/") route to:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
