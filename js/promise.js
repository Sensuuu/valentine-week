const startBtn = document.getElementById("startPromises");
const promiseBox = document.getElementById("promiseBox");

const promises = [
  "Merii babyy, I promise ki m tumhari baat hamesha sununga… chahe tum kuch na bhi bolo 🥹",
  "I promise ki tumhare sapne mere liye utne hi important honge jitne mere khud ke 💭",
  "I promise ki mushkil dino m bhi m patience rakhunga aur tumhara saath nahi chordunga 🫶",
  "I promise ki tumhe kabhi bhi akela feel nahi hone dunga, chahe situation koi bhi ho 🌍",
  "I promise ki tumhari respect hamesha sabse upar rahegi, har jagah aur har haal mein 💖",
  "I promise ki main tumhe samajhne ki poori koshish karunga, bina judge kiye 💗",
  "I promise ki jab tum thak jao, main tumhara sukoon banunga 🥰",
  "I promise ki har choti badi baat mein tumhare saath khada rahunga 🫂",
  "I promise ki main hamesha loyal rahunga dil se, dimaag se, har tarah se tmhare liye💞",
  "I promise… it will always be you my diyuu💍",
];

let index = 0;

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  promiseBox.classList.remove("hidden");

  showNextPromise();
});

function showNextPromise() {
  if (index >= promises.length) {
    finishPromiseDay();
    return;
  }

  const card = document.createElement("div");
  card.className = "promise-card";
  card.innerText = promises[index];

  if (index === promises.length - 1) {
    card.classList.add("special");
  }

  promiseBox.appendChild(card);
  index++;

  setTimeout(showNextPromise, 3000);
}

function finishPromiseDay() {
  setTimeout(() => {
    launchConfetti(); // soft emotional confetti

    const final = document.createElement("p");
    final.style.marginTop = "1.5rem";
    final.style.fontSize = "0.95rem";
    final.style.opacity = "0.85";
    final.innerHTML = `
      I don’t promise perfection…  
      but I promise effort, honesty, and <strong>us forever</strong> 💗
    `;

    promiseBox.appendChild(final);

    // 🎬 ADD GIF (soft & emotional)
    const gif = document.createElement("img");
    gif.src =
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFuNnNpbmFkcTRjcnhkNnBhZWgza2JjazdnY2R3enIzOWh5ZzRrciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GFtJhEvG3681y/giphy.gif";
    gif.style.width = "100%";
    gif.style.maxWidth = "380px";
    gif.style.margin = "1rem auto 0";
    gif.style.borderRadius = "14px";
    gif.style.display = "block";

    promiseBox.appendChild(gif);

    // ❤️ START FLOATING HEARTS HERE
    if (typeof startFloatingHearts === "function") {
      startFloatingHearts();
    }
  }, 800);
}
