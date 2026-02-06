const buttons = document.querySelectorAll("#days button");

// Valentine week mapping
const startDate = 7; // Feb 7 = Rose Day
const year = 2026;
const month = 1; // February (0-based)

const today = new Date();
const todayDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
);

buttons.forEach((btn) => {
  const dayIndex = parseInt(btn.dataset.day); // 1–8
  const unlockDay = startDate + (dayIndex - 1); // 7–14
  const unlockDate = new Date(year, month, unlockDay);

  if (todayDate < unlockDate) {
    btn.classList.add("locked");
    btn.innerHTML += " 🔒";
    btn.disabled = true;
  } else {
    btn.addEventListener("click", () => {
      window.location.href = `days/day${dayIndex}-${getDayName(dayIndex)}.html`;
    });
  }
});

function getDayName(dayIndex) {
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
  return names[dayIndex];
}
