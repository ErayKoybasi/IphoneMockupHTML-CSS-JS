const date = document.getElementById("dateToday")
const clock = document.getElementById("clock")


function updateDateTime() {
  let today = new Date();


  date.innerHTML = today.toLocaleDateString();


  clock.innerHTML = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes()

}
setInterval(updateDateTime, 1000)

updateDateTime()