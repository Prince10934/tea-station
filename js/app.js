const closeBtn = document.querySelector(".close-sidebar");
const openBtn = document.querySelector(".open-sidebar");
const sidebar = document.querySelector(".sidebar");
openBtn.addEventListener("click", () => {
  sidebar.classList.add("w-300");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("w-300");
});
