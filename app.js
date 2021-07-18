const colors = [
  "cyan",
  "blue",
  "pink",
  "yellow",
  "grey",
  "orange",
  "seagreen",
  "beige",
  "black",
  "chocolate",
  "cadetblue",
  "skyblur",
  "snow",
  "tan",
  "steelblue",
  "burlywood",
  "lightblue",
];
const btn = document.getElementById("btn");
const color_value = document.querySelector(".color_value");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color_value.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
