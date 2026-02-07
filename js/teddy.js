// teddy day

let teddyOpened = 0;

const teddyMessages = [
  "This teddy is for the days you miss me 🤍",
  "This one is for the comfort I wish I could give you in person 🫶",
  "This teddy carries my warmth, just for you 🧸",
  "This hug is for your tired days 😌",
  "This one is for your beautiful smile 🥺",
  "This teddy says: I’m always here 💖",
  "This hug is for every time you feel low 🤍",
  "This one is for our late night talks 🌙",
  "This teddy holds all my care for you 🧸",
  "This teddy is for when you wannaa cuddle meeeee!!!💕",
];

function openTeddy(card, index) {
  if (card.classList.contains("flipped")) return;

  const text = card.querySelector(".teddy-back p");

  card.classList.add("flipped");
  teddyOpened++;

  text.innerText = "Giving you the warmest hug… 🧸";
  launchConfetti();

  setTimeout(() => {
    text.innerText = teddyMessages[index];
  }, 1200);

  if (teddyOpened === teddyMessages.length) {
    setTimeout(showFinalTeddyReveal, 2500);
  }
}

function showFinalTeddyReveal() {
  const cards = document.querySelectorAll(".teddy-card");
  const container = document.querySelector(".container");

  // Step 1: fade out all teddy cards
  cards.forEach((card) => {
    card.classList.add("hide");
  });

  // Step 2: after fade, replace content
  setTimeout(() => {
    container.innerHTML = `
      <h1 class="title teddy-final">Happy Teddy Day 🧸</h1>

      <p class="final-text teddy-final">
        My favourite teddy is the one I want to hug every day…
      </p>

      <p class="final-text teddy-final">
        <strong>YOU</strong>, my safe place 🤍🫶
      </p>

      <img 
        src="https://media.giphy.com/media/l0HlPjezGY2M9qJ2M/giphy.gif"
        class="final-gif teddy-final"
      />

      <p class="footer-text">
        Come back tomorrow for another surprise 💌
      </p>
    `;

    launchConfetti();

    if (typeof startFloatingHearts === "function") {
      startFloatingHearts();
    }
  }, 900);
}
