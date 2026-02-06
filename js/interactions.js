function flipCard(card) {
  card.classList.toggle("flipped");
}

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

// Propose page section

let yesScale = 1;
let noCount = 0;
let locked = false;

function noClicked() {
  if (locked) return;

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const text = document.querySelector(".proposal-text");

  noCount++;

  // Grow YES
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Move NO
  const x = Math.random() * 60 - 30;
  const y = Math.random() * 30 - 15;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Teasing text
  if (noCount === 3) {
    text.innerText = "Okay okay… you’re running out of options 😏";
  }

  if (noCount === 6) {
    text.innerText = "At this point, the YES button is inevitable 💖";
  }

  if (noCount === 8) {
    text.innerText = "Stawpppp, Ohhh myyyyy gawwwddd!!!🫥";
  }

  if (noCount === 10) {
    text.innerText = "kardo haan smjhi? Buddhuu😏 ";
  }
  if (noCount === 12) {
    text.innerText = "Aaj toh haa krna hi padega😘 ";
  }
}

//Confetti function
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = ["#ff4d94", "#ff7eb9", "#ffd6e8"][
      Math.floor(Math.random() * 3)
    ];
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

function yesClicked() {
  if (locked) return;
  locked = true;

  const container = document.querySelector(".container");

  launchConfetti();

  container.innerHTML = `
    <h1>Yayyy Babyyyy💖</h1>
    <p style="font-size:0.95rem;">
      I knew it 😏
      Thank you for being my Valentine sweetu😘💕
    </p>
        <img 
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmpweDUyb2pmcjViem9nOTB6b2EwcXNrYTE2YmlyeHptMjA3MWRwZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/E5oLOBCawmPsRBenft/giphy.gif"
      alt="Happy"
      style="width:100%; border-radius:15px; margin-top:1rem;"
    />
    <img 
      src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cm84Z2R6czJsYWU4ZG5iYXhjZnhsZ2tvNjhseGV1dGFidXA1MGpodSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mqs3Hn4ItLWYU/giphy.gif"
      alt="Happy"
      style="width:100%; border-radius:15px; margin-top:1rem;"
    />
    <p class="footer-text">
      Come back tomorrow for another surprise 💌
    </p>
  `;
}

let chocoOpened = 0;

const chocolates = [
  "This chocolate is for the sweetness you bring into my life 🍫💖",
  "This one is for the way you make me smile without even trying meri jaan 😘",
  "This chocolate is for the comfort I feel when I talk to you 🍩",
  "REDEEM THIS IN REAL LIFE!!\nOne chocolate date with me, very soon 😘",
];

function openBox() {
  // const intro = document.getElementById("chocoIntro");
  const cards = document.getElementById("chocoCards");

  // intro.innerText = "Opening your chocolate box… 🍫💖";

  // setTimeout(() => launchConfetti(), 1000);

  // setTimeout(() => {
  //   intro.classList.add("hidden");
  //   cards.classList.remove("hidden");
  // }, 5000);
}

function flipChoco(card, index) {
  if (card.classList.contains("flipped")) return;

  const note = card.querySelector(".note p");

  card.classList.add("flipped");
  chocoOpened++;

  note.innerText = "Unwrapping… 🍫";
  launchConfetti();

  setTimeout(() => {
    note.innerText = chocolates[index];
  }, 1000);

  if (chocoOpened === 4) {
    setTimeout(showFinalChocolateReveal, 1500);
  }
}

function showFinalChocolateReveal() {
  const cards = document.querySelectorAll(".choco-card");
  const container = document.querySelector(".container");

  // Step 1: Hide all cards together
  cards.forEach((card) => card.classList.add("hide"));

  // Step 2: After cards fade out, show ONLY the question
  setTimeout(() => {
    container.innerHTML = `
      <h1 class="final-title">Wanna know my favourite chocolate? 🍫</h1>
    `;
  }, 700);

  // Step 3: After 2 seconds, confetti + final reveal
  setTimeout(() => {
    launchConfetti();

    container.innerHTML = `
      <h1 class="final-title">Wanna know my favourite chocolate? 🍫</h1>
      <p class="final-text">
        It issss <strong>YOUUU myyy babeeee</strong> 😘💖
      </p>
      <img 
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM202NGN0bHFxY2R6a2xxeDdoajM3a3BzdnNlY3phYmo3Z2R0MTBoaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yWSX1sxLwnpsI/giphy.gif"
        class="final-gif"
      />
      <p class="footer-text">
        Come back tomorrow for another surprise 💌
      </p>
    `;
  }, 2500);
}

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
  }, 900);
}
