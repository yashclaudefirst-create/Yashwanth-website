const button = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

button.addEventListener("click", () => {
  surprise.classList.toggle("hidden");
  button.textContent = surprise.classList.contains("hidden")
    ? "Tap for a little surprise 🎁"
    : "A little more love for Sobi 💗";
});
