function updateDateTime() {
  //main city name
  let mainTimeZoneElement = document.querySelector("#city-name");
  let mainTimeZoneName = timeZone.replace("_", " ").split("/")[1];
  mainTimeZoneElement.innerHTML = mainTimeZoneName;
  //Main section date
  let mainDateElement = document.querySelector("#main-date");
  let currentDate = moment().tz(timeZone).format("dddd, MMMM Do YYYY");
  mainDateElement.innerHTML = currentDate;
  //Main section clock
  let mainClockElement = document.querySelector("#clock");
  let currentTime = moment()
    .tz(timeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  mainClockElement.innerHTML = currentTime;

  //New York section
  let newYorkDateElement = document.querySelector("#new-york-date");
  let newYorkTimeElement = document.querySelector("#new-york-time");
  let newYorkCityTimeZone = moment.tz("America/New_York");
  newYorkDateElement.innerHTML =
    newYorkCityTimeZone.format("dddd, MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkCityTimeZone.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  //Paris section
  let parisDateElement = document.querySelector("#paris-date");
  let parisTimeElement = document.querySelector("#paris-time");
  let parisCityTimeZone = moment.tz("Europe/Paris");
  parisDateElement.innerHTML = parisCityTimeZone.format("dddd, MMMM Do YYYY");
  parisTimeElement.innerHTML = parisCityTimeZone.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  //Qatar section
  let qatarDateElement = document.querySelector("#qatar-date");
  let qatarTimeElement = document.querySelector("#qatar-time");
  let qatarCityTimeZone = moment.tz("Asia/Qatar");
  qatarDateElement.innerHTML = qatarCityTimeZone.format("dddd, MMMM Do YYYY");
  qatarTimeElement.innerHTML = qatarCityTimeZone.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  //Tokyo section
  let tokyoDateElement = document.querySelector("#tokyo-date");
  let tokyoTimeElement = document.querySelector("#tokyo-time");
  let tokyoCityTimeZone = moment.tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoCityTimeZone.format("dddd, MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoCityTimeZone.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  // Hours difference function

  function hoursDiff() {
    let newYorkOffset = moment.tz("America/New_York").utcOffset();
    let parisOffSet = moment.tz("Europe/Paris").utcOffset();
    let qatarOffSet = moment.tz("Asia/Qatar").utcOffset();
    let tokyoOffSet = moment.tz("Asia/Tokyo").utcOffset();

    //New York hours diff
    let newYorkDiffMinutes = newYorkOffset - currentOffSet;
    let newYorkDiffHours = Math.floor(Math.abs(newYorkDiffMinutes) / 60);
    let sign = newYorkDiffMinutes >= 0 ? "+" : "-";
    let newYorkHoursDiffElement = document.querySelector("#new-york-diff");
    newYorkHoursDiffElement.innerHTML = `(${sign}${newYorkDiffHours} hours)`;

    //Paris hours diff
    let parisDiffMinutes = parisOffSet - currentOffSet;
    let parisDiffHours = Math.floor(Math.abs(parisDiffMinutes) / 60);
    let parissign = parisDiffMinutes >= 0 ? "+" : "-";
    let parisHoursDiffElement = document.querySelector("#paris-diff");
    parisHoursDiffElement.innerHTML = `(${parissign}${parisDiffHours} hours)`;

    //Qatar hours diff
    let qatarDiffMinutes = qatarOffSet - currentOffSet;
    let qatarDiffHours = Math.floor(Math.abs(qatarDiffMinutes) / 60);
    let qatarsign = qatarDiffMinutes >= 0 ? "+" : "-";
    let qatarHoursDiffElement = document.querySelector("#qatar-diff");
    qatarHoursDiffElement.innerHTML = `(${qatarsign}${qatarDiffHours} hours)`;

    //Tokyo hours diff
    let tokyoDiffMinutes = tokyoOffSet - currentOffSet;
    let tokyoDiffHours = Math.floor(Math.abs(tokyoDiffMinutes) / 60);
    let tokyosign = tokyoDiffMinutes >= 0 ? "+" : "-";
    let tokyoHoursDiffElement = document.querySelector("#tokyo-diff");
    tokyoHoursDiffElement.innerHTML = `(${tokyosign}${tokyoDiffHours} hours)`;
  }
  hoursDiff();
}

// Select functionality and main location data replacement
function updateMainLocation(event) {
  let selectedValue = event.target.value;
  timeZone = selectedValue;

  if (!selectedValue) {
    timeZone = moment.tz.guess();
    let citiesHidden = document.querySelector("#cities-block");
    citiesHidden.classList.remove("hide");
    let cityUpdatedHoursDiffElement =
      document.querySelector("#main-hours-diff");
    cityUpdatedHoursDiffElement.innerHTML = "";
    return;
  }

  let cityNameUpdated = timeZone.replace("_", " ").split("/")[1];
  let cityTimeUpdated = moment()
    .tz(timeZone)
    .format("h:mm:ss [<small>]A[</small>]");
  let cityDateUpdated = moment().tz(timeZone).format("dddd, MMMM Do YYYY");
  let updatedLocationElement = document.querySelector("#updated-main-location");
  updatedLocationElement.innerHTML = `
        <h2 id="city-name">${cityNameUpdated}</h2>
        <p>
          <div class="date" id="main-date">${cityDateUpdated}</div>
          <div class="clock" id="clock">${cityTimeUpdated}</div>
        </p>
        <div class="hours" id="main-hours-diff">hours</div>
      `;
  let citiesHidden = document.querySelector("#cities-block");
  citiesHidden.classList.add("hide");

  //hours difference for city updated
  let cityOffSet = moment.tz(timeZone).utcOffset();
  let cityUpdatedDiffMinutes = cityOffSet - currentOffSet;
  let cityUpdatedDiffHours = Math.floor(Math.abs(cityUpdatedDiffMinutes) / 60);
  let sign = cityUpdatedDiffMinutes >= 0 ? "+" : "-";
  let cityUpdatedHoursDiffElement = document.querySelector("#main-hours-diff");
  cityUpdatedHoursDiffElement.innerHTML = `(${sign}${cityUpdatedDiffHours} hours)`;
}

let timeZone = moment.tz.guess();
let currentOffSet = moment.tz("Europe/Madrid").utcOffset();

updateDateTime();
setInterval(updateDateTime, 1000);

let updatedCity = document.querySelector("#city-select");
updatedCity.addEventListener("change", updateMainLocation);
