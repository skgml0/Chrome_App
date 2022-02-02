const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(img/${chosenImg})`;
// img 태그 생성시
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImg}`;
// document.body.appendChild(bgImage);
// document.body.prepend(bgImage);
