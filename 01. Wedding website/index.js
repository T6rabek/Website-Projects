const weddingDate = new Date("2024-11-15T00:00:00").getTime();

function updateElapsedTime() {
    const now = new Date().getTime();
    const timePassed = now - weddingDate; 

    if (timePassed < 0) {
        
        document.getElementById("elapsed-time").innerText = "The wedding hasn't happened yet!";
        return;
    }

    const days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timePassed % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateElapsedTime, 1000);