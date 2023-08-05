if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
  document.querySelector('#theme-switch').innerHTML = "🌙"
}

function switchMode(el) {
  const bodyClass = document.body.classList;
  bodyClass.contains("dark")
    ? ((el.innerHTML = "☀️"), bodyClass.remove("dark"))
    : ((el.innerHTML = "🌙"), bodyClass.add("dark"));
}