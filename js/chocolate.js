//Chocolate day

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
