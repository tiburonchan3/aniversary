const pages = document.querySelectorAll(".page");

let leftZ = 0;
let rightZ = 6;
function handlePage(event) {
  const thisPage = event.currentTarget;
  if (
    !thisPage.classList.contains("animationOpen") &&
    !thisPage.classList.contains("animationClose")
  ) {
    rightZ += -1;
    leftZ += 1;
    thisPage.classList.add("animationOpen");
    thisPage.style.zIndex = leftZ;
  } else if (thisPage.classList.contains("animationOpen")) {
    thisPage.classList.remove("animationOpen");
    thisPage.classList.add("animationClose");
    leftZ += -1;
    rightZ += +1;
    thisPage.style.zIndex = rightZ;
  } else {
    thisPage.classList.remove("animationClose");
    thisPage.classList.add("animationOpen");
    rightZ += -1;
    leftZ += 1;
    thisPage.classList.add("animationOpen");
    thisPage.style.zIndex = leftZ;
  }
}

for (const page of pages) {
  page.addEventListener("click", handlePage);
}
