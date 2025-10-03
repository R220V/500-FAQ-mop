
function setStoredTheme(theme) {
  setTheme(theme);

  sessionStorage.setItem("theme", theme);
  // localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  // const savedTheme = localStorage.getItem("theme");
  const savedTheme = sessionStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme); 
  }
});