const API_KEY = "e470fa5a04f3615e8e91844a53f67e97";
function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in ", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    });
}
function onGeoError() {
  alert("Cant't find you. No Weather for you.");
}
// javascript가 user의 위치를 전달해준다.
// navigator.geolocation.getCurrentPositon(success, error, oprions)
// success : GeolocationPosition 객체를 유일한 매개변수로 받는 콜백함수
// error : GeolocationPositionError 객체를 유일한 매개변수로 받는 콜백함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
