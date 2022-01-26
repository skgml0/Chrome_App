const clock = document.querySelector("h2#clock");
// function sayHello() {
//   console.log("hello");
// }
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
// 함수 를 5000ms 간격으로 실행
setInterval(getClock, 1000);

// 5000ms 기다린 후 실행
// setTimeout(sayHello, 5000);
