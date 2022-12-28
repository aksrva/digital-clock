let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let seconds = document.getElementById("seconds");
function getTime() {
    let today = new Date();
    hours.innerHTML = today.getHours();
    mins.innerHTML = today.getMinutes();
    seconds.innerHTML = today.getSeconds();
}
setInterval(getTime, 1000);