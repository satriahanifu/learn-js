const tabContainer = document.querySelector(".tab-container");
const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

tabContainer.addEventListener("click", (event) => {
  const clicked = event.target.closest(".tab-item");

  if (!clicked) return;

  tabItems.forEach((tab) => tab.classList.remove("tab-item--active"));
  tabContents.forEach((tab) => tab.classList.remove("container-content--active"));

  clicked.classList.add("tab-item--active");

  // active tab content
  document.querySelector(`.tab-content--${clicked.dataset.tab}`).classList.add("container-content--active");
});
