const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const MEMORY_FILE = "rachel_memory.json";

app.use(express.static(path.join(__dirname)));

app.get("/data", (req, res) => {
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

  let memory = [];
  if (fs.existsSync(MEMORY_FILE)) {
    memory = JSON.parse(fs.readFileSync(MEMORY_FILE));
  }
  memory.push({ ability: newAbility, timestamp: new Date().toISOString() });
  fs.writeFileSync(MEMORY_FILE, JSON.stringify(memory, null, 2));

  res.json({ latest: newAbility, memory });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Rachel is alive at http://localhost:${PORT}`);
});
