const sohwNamesOfPresons = document.getElementById("sohwNamesOfPresons");

const drawPersons = document.getElementById("nameFromData");
const nameArray = [];
let eyesArray = [];
let nameShowVehicle;
let countPage = 1;
let vehicles;
let starships;
let film;
let homeworlds;

async function fetchDataFromApi() {
  const urlStarwarsPage1 = "https://swapi.dev/api/people/?page=1";
  const urlStarwarsPage2 = "https://swapi.dev/api/people/?page=2";
  const urlStarwarsPage3 = "https://swapi.dev/api/people/?page=3";
  const urlStarwarsPage4 = "https://swapi.dev/api/people/?page=4";
  const fetchData1 = fetch(urlStarwarsPage1).then((response) =>
    response.json()
  );
  const fetchData2 = fetch(urlStarwarsPage2).then((response) =>
    response.json()
  );
  const fetchData3 = fetch(urlStarwarsPage3).then((response) =>
    response.json()
  );
  const fetchData4 = fetch(urlStarwarsPage4).then((response) =>
    response.json()
  );
  Promise.all([fetchData1, fetchData2, fetchData3, fetchData4])
    .then((dataArray) => {
      const [data1, data2, data3, data4] = dataArray;
      data1.results.forEach((element) => {
        nameArray.push(element.name);
        eyesArray.push(element.eye_color);
      });
      data2.results.forEach((element) => {
        nameArray.push(element.name);
        eyesArray.push(element.eye_color);
      });
      data3.results.forEach((element) => {
        nameArray.push(element.name);
        eyesArray.push(element.eye_color);
      });
      data4.results.forEach((element) => {
        nameArray.push(element.name);
        eyesArray.push(element.eye_color);
      });
      for (i = 0; i < 40; i++) {
        let charaterDetsils = document.createElement("div");

        let buttoname = document.createElement("button");
        buttoname.classList.add("charater");
        let li = `<i id="logo" class="fa-regular fa-eye eyes"></i>`;
        charaterDetsils.classList.add("charaterDetsils");
        charaterDetsils.innerHTML = li;
        drawPersons.appendChild(charaterDetsils);
        charaterDetsils.appendChild(buttoname);
      }

      document.querySelectorAll(".charater").forEach((button, index) => {
        button.innerHTML = nameArray[index];
        button.addEventListener("click", addDataFromApi);
      });
      document.querySelectorAll(".eyes").forEach((eyes, index) => {
        eyes.style.backgroundColor = eyesArray[index];
      });
    })
    .catch((error) => console.error("Error:", error));
}
fetchDataFromApi();
function addDataFromApi(event) {
  nameShowVehicle = event.target.innerHTML;
  findCharacterByName(nameShowVehicle);
  ///clear the list when clicking another charather
  document.querySelectorAll("li").forEach((li) => {
    li.remove();
  });
  return nameShowVehicle;
}

async function findCharacterByName(nameShowVehicle) {
  const httpReuest = await fetch(
    `https://swapi.dev/api/people/?search=${nameShowVehicle}`
  );
  const httpRespons = await httpReuest.json();
  vehicles = httpRespons.results[0].vehicles; ///catch all the api of the vehicles
  vehicle(vehicles);
  starships = httpRespons.results[0].starships; ///catch all the api of the starships
  starship(starships);
  film = httpRespons.results[0].films; ///catch all the api of the films
  films(film);
  homeworlds = httpRespons.results[0].homeworld; ///catch all the api of the homeworld

  homeworld(homeworlds);
}

////////////////////////////////////////////////////vehicles//////////////////////////////
const sohwvehiclesOfPresons = document.getElementById("vehiclesList");
async function vehicle(vehicles) {
  vehicles.forEach(async (vehicle) => {
    let vehicleReuest = await fetch(vehicle);
    let vehicleRespons = await vehicleReuest.json();
    let li = document.createElement("li");
    li.innerHTML = `<span>name:</span> ${vehicleRespons.name}
    <br>
     <span>model:</span> ${vehicleRespons.model}
     <br>
     <span>manufacturer:</span> ${vehicleRespons.manufacturer}
     `;

    sohwvehiclesOfPresons.appendChild(li);
  });
}
////////////////////////////////////////////////////starships//////////////////////////////
const sohwvstarshipsOfPresons = document.getElementById("starshipsList");
async function starship(starships) {
  starships.forEach(async (starship) => {
    let starshipReuest = await fetch(starship);
    let starshipRespons = await starshipReuest.json();
    let li = document.createElement("li");
    li.innerHTML = ` <span>name:</span>${starshipRespons.name}
    <br>
    <span>model:</span> ${starshipRespons.model}
<br>
     <span>manufacturer:</span> ${starshipRespons.manufacturer}`;

    sohwvstarshipsOfPresons.appendChild(li);
  });
}
////////////////////////////////////////////////////films//////////////////////////////
const sohwfilmsOfPresons = document.getElementById("filmsList");
async function films(film) {
  film.forEach(async (film) => {
    let filmpReuest = await fetch(film);
    let filmRespons = await filmpReuest.json();
    let li = document.createElement("li");
    li.innerHTML = `<span>title:</span>${filmRespons.title}
    <br>
    <span>release_date:</span>${filmRespons.release_date}
    `;

    sohwfilmsOfPresons.appendChild(li);
  });
}

///////////////////////////////////////////////////homeworldList/////////////////////////
const sohwhomeworld = document.getElementById("homeworldList");

async function homeworld(homeworlds) {
  let homeworldReuest = await fetch(homeworlds);
  let homeworlRespons = await homeworldReuest.json();
  let li = document.createElement("li");
  li.innerText = `${homeworlRespons.name}`;
  sohwhomeworld.appendChild(li);
}
