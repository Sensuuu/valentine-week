let yesScale = 1;
let noCount = 0;
let locked = false;

const bgMusic = new Audio("../assets/audio/propose-music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;

function noClicked() {
  if (locked) return;

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const text = document.querySelector(".proposal-text");

  noCount++;

  // Grow YES
  yesScale += 0.18;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Move NO
  const x = Math.random() * 60 - 30;
  const y = Math.random() * 30 - 15;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  // Teasing text
  if (noCount === 3) text.innerText = "Okay okay… thoda soch lo 😏";
  if (noCount === 6) text.innerText = "YES button is literally begging now 💖";
  if (noCount === 9) text.innerText = "Bas karoooo 😭😂";
  if (noCount === 10) text.innerText = "kardo haan smjhi? Buddhuu😏 ";
  if (noCount === 12) text.innerText = "Aaj toh haa krna hi padega😘 ";
}

function yesClicked() {
  if (locked) return;
  locked = true;

  const container = document.querySelector(".container");

  bgMusic.play();

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
      Come back tomorrow for another surprise my babyyy💌
    </p>
  `;
}
