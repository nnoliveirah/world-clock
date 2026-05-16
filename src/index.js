function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // Amsterdam
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = amsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }

  // Bissau
  let bissauElement = document.querySelector("#bissau");
  if (bissauElement) {
    let bissauDateElement = bissauElement.querySelector(".date");
    let bissauTimeElement = bissauElement.querySelector(".time");
    let bissauTime = moment().tz("Africa/Bissau");

    bissauDateElement.innerHTML = bissauTime.format("MMMM Do YYYY");
    bissauTimeElement.innerHTML = bissauTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="selected-city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A",
    )}</small></div>
    </div>
    <div class="allcities"> 
      <a href="/"> All cities</a> </div>
    
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
