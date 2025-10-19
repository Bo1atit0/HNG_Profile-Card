const now = new Date();
let hours = now.getUTCHours(); // get hours from the full time
const amPm = hours < 12 ? "AM" : "PM";
hours = hours % 12 || 12;
const formattedHours = hours.toString().padStart(2, "0");
const minutes = now.getUTCMinutes().toString().padStart(2, 0);
const currentTime = `${formattedHours}:${minutes} ${amPm}`;
console.log(currentTime);

document.querySelector(".current-time-utc h5").innerText = `${currentTime}`;
