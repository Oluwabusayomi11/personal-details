const now = new Date();

function getCurrentDay() {
  const day = now.getDay();
  var dayOfWeek;
  switch (day) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
  }
  document.getElementById("currentDay").innerHTML = dayOfWeek;
}

function getUTCTime() {
  const hours = now.getUTCHours();
  const mins = now.getUTCMinutes();
  const sec = now.getUTCSeconds();
  const millisec = now.getUTCMilliseconds();
  var time = hours + ":" + mins + ":" + sec + ":" + millisec;
  document.getElementById("currentTime").innerHTML = time;
}
getUTCTime();
getCurrentDay();
