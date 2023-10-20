const floatingBtn = document.querySelector(".floating-btn");

floatingBtn.addEventListener("click", () => {
  floatingBtn.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!floatingBtn.contains(e.target)) {
    floatingBtn.classList.remove("active");
  }
});
