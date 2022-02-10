const today = document.querySelector("#day");
console.log(today);
function getDay() {
  const days = new Date();
  const year = days.getFullYear();
  const month = days.getMonth();
  const day = days.getDate();
  today.innerText = `${year}년 ${month}월 ${day}일`;
}

getDay();
