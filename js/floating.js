const compliments = [
  "I love you ❤️",
  "Meri duniya 🌍",
  "Sabse pyaari meri jaan💕",
  "My hotest mommy🤤",
  "Mera sukoon 🥰",
  "Only you 🫶",
  "Mine forever 💍",
  "Cutest human alive 😘",
  "My homeee",
  "Always you 💖",
  "My kuchu pucchuuu😘",
];

let complimentIndex = 0;
let shuffledCompliments = [...compliments].sort(() => Math.random() - 0.5);

function getNextCompliment() {
  if (complimentIndex >= shuffledCompliments.length) {
    shuffledCompliments = [...compliments].sort(() => Math.random() - 0.5);
    complimentIndex = 0;
  }
  return shuffledCompliments[complimentIndex++];
}

function spawnHeart() {
  const layer = document.getElementById("floating-layer");
  if (!layer) return;

  const heart = document.createElement("div");
  heart.className = "float-heart";
  heart.innerText = "💖";

  const startX = Math.random() * (window.innerWidth - 60);
  heart.style.left = startX + "px";

  let clicked = false;

  heart.addEventListener("click", (e) => {
    clicked = true;
    showLoveText(e.clientX, e.clientY);
    heart.remove();
  });

  layer.appendChild(heart);

  /* If NOT clicked → auto pop near top (90%) */
  setTimeout(() => {
    if (!clicked && heart.isConnected) {
      const rect = heart.getBoundingClientRect();
      showLoveText(rect.left, rect.top);
      heart.remove();
    }
  }, 9000); // 90% of 10s animation

  /* Safety cleanup */
  setTimeout(() => heart.remove(), 10000);
}

function showLoveText(x, y) {
  const layer = document.getElementById("floating-layer");
  const text = document.createElement("div");
  text.className = "love-text";

  // pick a compliment (we’ll improve randomness below)
  text.innerText = getNextCompliment();

  layer.appendChild(text);

  const padding = 12;
  const rect = text.getBoundingClientRect();

  let safeX = x - rect.width / 2;
  let safeY = y - rect.height - 10;

  // keep inside screen
  safeX = Math.max(
    padding,
    Math.min(window.innerWidth - rect.width - padding, safeX),
  );
  safeY = Math.max(
    padding,
    Math.min(window.innerHeight - rect.height - padding, safeY),
  );

  text.style.left = safeX + "px";
  text.style.top = safeY + "px";

  setTimeout(() => text.remove(), 1800);
}

/* Spawn slower so it feels romantic, not spammy */
// spawn first heart instantly
// spawnHeart();

// then keep spawning
let floatingInterval = null;

function startFloatingHearts() {
  if (floatingInterval) return; // prevent double start
  spawnHeart(); // first heart immediately
  floatingInterval = setInterval(spawnHeart, 4500);
}

function stopFloatingHearts() {
  clearInterval(floatingInterval);
  floatingInterval = null;
}

// AUTO-START floating hearts unless disabled by page
if (!window.disableAutoFloatingHearts) {
  startFloatingHearts();
}
