const images = ["0.jpg", "1.jpg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(img/${chosenImg})`;
// img 태그 생성시
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImg}`;
// document.body.appendChild(bgImage);
// document.body.prepend(bgImage);
