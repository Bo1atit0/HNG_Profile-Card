const timeDiv = document.getElementsByClassName("time")[0]; // first element with class "time"
timeDiv.innerHTML = `<h5>Current Time</h5> <p>${Date.now()}</p>`;
