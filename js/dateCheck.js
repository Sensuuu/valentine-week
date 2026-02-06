const buttons = document.querySelectorAll("#days button");

// CHANGE YEAR IF NEEDED
const year = 2026;
const month = 1; // February

const today = new Date();
const currentDate = today.getDate();

buttons.forEach((btn) => {
  const day = parseInt(btn.dataset.day);

  if (currentDate < day) {
    btn.classList.add("locked");
    btn.innerText += " 🔒";
  } else {
    btn.addEventListener("click", () => {
      window.location.href = `days/day${day}-${getDayName(day)}.html`;
    });
  }
});

function getDayName(day) {
  const names = {
    7: "rose",
    8: "propose",
    9: "chocolate",
    10: "teddy",
    11: "promise",
    12: "hug",
    13: "kiss",
    14: "valentine",
  };
  return names[day];
}
