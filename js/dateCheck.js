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
    1: "rose",
    2: "propose",
    3: "chocolate",
    4: "teddy",
    5: "promise",
    6: "hug",
    7: "kiss",
    8: "valentine",
  };
  return names[day];
}
