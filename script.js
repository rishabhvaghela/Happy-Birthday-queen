const startBtn = document.getElementById("startBtn");
const surprise = document.getElementById("surprise");
const bgMusic = document.getElementById("bgMusic");
const giftBox = document.querySelector(".gift-box");
const cakeContainer = document.getElementById("cakeContainer");

// Start button click
startBtn.addEventListener("click", () => {
  document.querySelector(".center-content").style.display = "none";
  surprise.classList.remove("hidden");
  bgMusic.play();
});

// Gift Box Click → Show Cake
giftBox.addEventListener("click", () => {
  giftBox.style.display = "none";
  cakeContainer.classList.remove("hidden");
});

// Cake Click → Confetti Surprise
const cakeImg = document.querySelector(".cake-img");
cakeImg.addEventListener("click", () => {
  launchConfetti();
  alert("🎂 Happy Birthday! May your day be as sweet as this cake 💖");
});

// Confetti Function
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

function getRandomColor() {
  const colors = ["#ff4081", "#ffeb3b", "#4caf50", "#2196f3", "#ff5722"];
  return colors[Math.floor(Math.random() * colors.length)];
}
