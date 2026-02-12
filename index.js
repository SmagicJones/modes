const modeDisplay = document.getElementById("mode-display");

const mode = ["t", "t", "s", "t", "t", "t", "s"];

const modeNames = [
  "Ionian",
  "Dorian",
  "Phrygian",
  "Lydian",
  "Mixolydian",
  "Aeolian",
  "Locrian",
];

const intervalItems = document.querySelectorAll(".interval");

intervalItems.forEach((item, i) => (item.innerHTML = mode[i]));

const previous = document.getElementById("previous");
const next = document.getElementById("next");

let offset = 0;

function updateDisplay() {
  intervalItems.forEach((item, i) => {
    const index = (i + offset) % mode.length;
    item.innerHTML = mode[index];
    document.getElementById("mode-name").textContent = modeNames[offset];
  });
}

previous.addEventListener("click", function () {
  console.log("you clicked previous");
  offset = (offset - 1 + mode.length) % mode.length;
  updateDisplay();
});

next.addEventListener("click", function () {
  console.log("you clicked next");
  offset = (offset + 1) % mode.length;
  updateDisplay();
});
