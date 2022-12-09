const button = document.querySelector(".darkmode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = sessionStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light");
}

button.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light");
    var theme = document.body.classList.contains("light")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark");
    var theme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
  }
  sessionStorage.setItem("theme", theme);
});