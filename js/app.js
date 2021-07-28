const closeBtn = document.querySelector(".close-sidebar");
const openBtn = document.querySelector(".open-sidebar");
const sidebar = document.querySelector(".sidebar");
openBtn.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width <= 756) {
    sidebar.style.width = "100vw";
  } else {
    sidebar.style.width = "300px";
  }
});
closeBtn.addEventListener("click", () => {
  sidebar.style.width = 0;
});
