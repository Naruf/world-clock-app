function updateDateTime() {
  let mainClockElement = document.querySelector("#clock");
  let malagaCityTimeZone = moment.tz("Europe/Madrid");
  let currentTime = malagaCityTimeZone.format("h:mm:ss [<small>]A[</small>]");
  mainClockElement.innerHTML = currentTime;

  let mainDateElement = document.querySelector("#main-date");
  let currentDate = malagaCityTimeZone.format("dddd, MMMM Do YYYY");
  mainDateElement.innerHTML = currentDate;

  let newYorkDateElement = document.querySelector("#new-york-date");
  let newYorkTimeElement = document.querySelector("#new-york-time");
  let newYorkCityTimeZone = moment.tz("America/New_York");

  newYorkDateElement.innerHTML =
    newYorkCityTimeZone.format("dddd, MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkCityTimeZone.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let parisDateElement = document.querySelector("#paris-date");
  let parisTimeElement = document.querySelector("#paris-time");
  let parisCityTimeZone = moment.tz("Europe/Paris");
  parisDateElement.innerHTML = parisCityTimeZone.format("dddd, MMMM Do YYYY");
  parisTimeElement.innerHTML = parisCityTimeZone.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let qatarDateElement = document.querySelector("#qatar-date");
  let qatarTimeElement = document.querySelector("#qatar-time");
  let qatarCityTimeZone = moment.tz("Asia/Qatar");
  qatarDateElement.innerHTML = qatarCityTimeZone.format("dddd, MMMM Do YYYY");
  qatarTimeElement.innerHTML = qatarCityTimeZone.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  let tokyoDateElement = document.querySelector("#tokyo-date");
  let tokyoTimeElement = document.querySelector("#tokyo-time");
  let tokyoCityTimeZone = moment.tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoCityTimeZone.format("dddd, MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoCityTimeZone.format(
    "h:mm:ss [<small>]A[</small>]",
  );
  function hoursDiff() {
    let newYorkOffset = moment.tz("America/New_York").utcOffset();
    let parisOffSet = moment.tz("Europe/Paris").utcOffset();
    let qatarOffSet = moment.tz("Asia/Qatar").utcOffset();
    let tokyoOffSet = moment.tz("Asia/Tokyo").utcOffset();
    let malagaOffset = moment.tz("Europe/Madrid").utcOffset();

    let newYorkDiffMinutes = newYorkOffset - malagaOffset;
    let newYorkDiffHours = Math.floor(Math.abs(newYorkDiffMinutes) / 60);
    let sign = newYorkDiffMinutes >= 0 ? "+" : "-";
    let newYorkHoursDiffElement = document.querySelector("#new-york-diff");
    newYorkHoursDiffElement.innerHTML = `(${sign}${newYorkDiffHours} hours)`;

    let parisDiffMinutes = parisOffSet - malagaOffset;
    let parisDiffHours = Math.floor(Math.abs(parisDiffMinutes) / 60);
    let parissign = parisDiffMinutes >= 0 ? "+" : "-";
    let parisHoursDiffElement = document.querySelector("#paris-diff");
    parisHoursDiffElement.innerHTML = `(${parissign}${parisDiffHours} hours)`;

    let qatarDiffMinutes = qatarOffSet - malagaOffset;
    let qatarDiffHours = Math.floor(Math.abs(qatarDiffMinutes) / 60);
    let qatarsign = qatarDiffMinutes >= 0 ? "+" : "-";
    let qatarHoursDiffElement = document.querySelector("#qatar-diff");
    qatarHoursDiffElement.innerHTML = `(${qatarsign}${qatarDiffHours} hours)`;

    let tokyoDiffMinutes = tokyoOffSet - malagaOffset;
    let tokyoDiffHours = Math.floor(Math.abs(tokyoDiffMinutes) / 60);
    let tokyosign = tokyoDiffMinutes >= 0 ? "+" : "-";
    let tokyoHoursDiffElement = document.querySelector("#tokyo-diff");
    tokyoHoursDiffElement.innerHTML = `(${tokyosign}${tokyoDiffHours} hours)`;
  }
  hoursDiff();
}
updateDateTime();
setInterval(updateDateTime, 1000);
