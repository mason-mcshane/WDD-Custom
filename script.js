const counterMap = {
    "iron man": ["Magneto", "Storm"],
    "spider-man": ["Venom", "Green Goblin"],
    "hulk": ["Black Widow", "Doctor Strange"],
    "thor": ["Loki", "Magneto"],
    "captain america": ["Red Skull", "Ultron"]
  };

  function getCounter() {
    const input = document.getElementById("enemyInput").value.toLowerCase().trim();
    const resultDiv = document.getElementById("result");

    if (counterMap[input]) {
      const counters = counterMap[input];
      resultDiv.innerHTML = `Counter Picks for <strong>${capitalize(input)}</strong>: ${counters.join(", ")}`;
    } else {
      resultDiv.innerHTML = `No counter data for <strong>${capitalize(input)}</strong>. Try another hero.`;
    }
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }