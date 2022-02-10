const baseURL = "https://api.sampleapis.com/coffee/hot";
fetch(baseURL)
  .then((resp) => resp.json())
  .then((data) => displayData(data));

function displayData(data) {
  console.log(data);
  console.log(data.length);
  const todayCoffee = data[Math.floor(Math.random() * data.length)];
  console.log(todayCoffee);
  coffeeTitle = document.querySelector(".coffee-title");
  coffeeTitle.innerText += " " + todayCoffee["title"];
}
