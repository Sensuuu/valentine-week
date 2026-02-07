// 🌹 Rose Day
let roseOpened = 0;

const roseMessages = [
  "This rose is for your smile, it makes everything better 💖",
  "This rose is for the calm you bring into my life 🌸",
  "This one is just because you are YOU 🥺",
  "This rose is for the way you understand me 🤍",
  "This one is for your beautiful heart 💞",
  "This rose is for every time you make me laugh 😘",
  "This one is for your kindness 🌷",
  "This rose is for our memories together 💫",
  "This one is for the love I feel for you 💕",
  "This rose is special… just like YOU 🌹✨",
];

function flipCard(card) {
  if (card.classList.contains("flipped")) return;

  card.classList.add("flipped");
  roseOpened++;

  const note = card.querySelector(".note p");
  note.innerText = roseMessages[roseOpened - 1];

  launchConfetti();

  if (roseOpened === roseMessages.length) {
    setTimeout(showFinalRoseReveal, 2000);
  }
}

function showFinalRoseReveal() {
  const cards = document.querySelectorAll(".rose-card");
  const container = document.querySelector(".container");

  cards.forEach((c) => c.classList.add("hide"));

  setTimeout(() => {
    container.innerHTML = `
      <h1 class="final-title">All roses bloom for you 🌹</h1>
      <p class="final-text">
        No flower could ever match your beauty…  
        but I still wanted to try myyy babbyyy😘💖
      </p>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXF3d2x5cTduYWF6bjJqaGhsMXdnMDAxcWs3bTRnNWFvZG1raWI2aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/s81feqTh83pwpViPmw/giphy.gif"
        class="final-gif"
      />
      <img
        src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dWpyajUwZGxpc2V3ZDAwOTBuN3JyMG91MzNtNXZheGZqaHcwNGQ3MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Xz0b2TuoIWJ1tS7I85/giphy.gif"
        class="final-gif"
      />
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHRhYm1wdnBpbmNncmN1djRzaTgxa2RwZjh4dzQwYm43ejFhMnppbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ytu2GUYbvhz7zShGwS/giphy.gif"
        class="final-gif"
      />
      <p class="footer-text">
        Come back tomorrow for another surprise 💌
      </p>
    `;
    launchConfetti();
  }, 700);
}
