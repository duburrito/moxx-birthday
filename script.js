const goals = [
  ["$110", "1 New Emote"],
  ["$220", "Birthday Cake"],
  ["$330", "Build Me A Pizza Order"],
  ["$440", "Try new meal recipe chosen by you!"],
  ["$550", "New Chair"],
  ["$660", "9 hour stream"],
  ["$770", "Apple Watch to track steps"],
  ["$880", "Official Logo"],
  ["$990", "Official Moxxi PC screen saver"],
  ["$1100", "Official badges"],
  ["$1320", "New Headset"],
];

const stretchGoals = [
  ["$1650", "Official Moxxi RefSheet"],
  ["$1850", "Open 18+ Patreon"],
  ["$2000", "New Mic"],
  ["$2000+", "18+ Short Film Animation + 4 New Emotes"],
];

const incentives = [
  ["$5", "Raffle Entry"],
  ["$10", "Name on Model"],
  ["$25", "Silly Sing"],
  ["$60", "Monochrome Doodle"],
  ["$120+", "Thank you note in mail <3"],
];

const games = [
  "Resident Evil Requiem",
  "Dead by Daylight",
  "Fortnite",
  "REPO",
  "Pretty Derby",
  "Identity V",
  "Wild Assault",
  "Duolingo",
  "Word Game",
];

function renderGoals(containerId, list) {
  const container = document.getElementById(containerId);

  container.innerHTML = list.map(([amount, text]) => `
    <div class="goal">
      <div class="amount">${amount}</div>
      <p>${text}</p>
    </div>
  `).join("");
}

function renderIncentives() {
  const container = document.getElementById("incentives");

  container.innerHTML = incentives.map(([amount, text]) => `
    <div class="card">
      <h3>${amount}</h3>
      <p>${text}</p>
    </div>
  `).join("");
}

function renderGames() {
  const container = document.getElementById("games");

  container.innerHTML = games.map(game => `
    <div class="game">
      <p>${game}</p>
    </div>
  `).join("");
}

function createEmbers() {
  const emberContainer = document.getElementById("embers");

  for (let i = 0; i < 65; i++) {
    const ember = document.createElement("span");
    ember.classList.add("ember");

    ember.style.left = `${Math.random() * 100}%`;
    ember.style.animationDuration = `${6 + Math.random() * 9}s`;
    ember.style.animationDelay = `${Math.random() * 8}s`;
    ember.style.opacity = Math.random();

    emberContainer.appendChild(ember);
  }
}

renderGoals("goals", goals);
renderGoals("stretchGoals", stretchGoals);
renderIncentives();
renderGames();
createEmbers();