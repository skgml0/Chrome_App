const slideContainer = document.querySelector(".slide-list");
const carouselContents = document.querySelectorAll(".slide-item");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
console.log("ㅇㅑ아아아", prevBtn);
//counter
let counter = 1;
const size = carouselContents[0].clientWidth;

slideContainer.style.transform = "translateX(" + -size * counter + "px)";
//Button Listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselContents.length - 1) return;
  slideContainer.style.transition = "transform 0.2s ease-in-out";
  counter++;
  slideContainer.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slideContainer.style.transition = "transform 0.2s ease-in-out";
  counter--;
  slideContainer.style.transform = "translateX(" + -size * counter + "px)";
});
console.log(carouselContents.length);
