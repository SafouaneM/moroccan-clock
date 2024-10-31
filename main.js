function predictArrival() {
    const friendTimeInput = document.getElementById("friend_time");
    const predictionOutput = document.getElementById("prediction");

    if (friendTimeInput.value === "") {
        predictionOutput.innerHTML = "Please enter a time.";
    } else {
        let friendTime = new Date(`1970-01-01T${friendTimeInput.value}:00`);
        friendTime.setMinutes(friendTime.getMinutes() + 60);

        let hours = friendTime.getHours();
        let minutes = friendTime.getMinutes();

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;

        predictionOutput.innerHTML = "He will come around " + hours + ":" + minutes;
    }
}

function calculateRealTime() {
    const realTimePredictionOutput = document.getElementById("real_time_prediction");
    realTimePredictionOutput.innerHTML = "He's going to be there in around 30 minutes including a bathroom break";

    // create confetti effect
    confetti({
        particleCount: 200,
        spread: 500
    });
}

function predictFiveMinutes() {
    let now = new Date();
    let min = 15;
    let max = 45;
    let extraMinutes = Math.floor(Math.random() * (max - min + 1)) + min;
    now.setMinutes(now.getMinutes() + extraMinutes);

    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    alert("He will come around " + hours + ":" + minutes);
};

function showModal() {
    let imageSrc = 'https://pbs.twimg.com/media/FnP7ZKQXkAEsI3n.jpg';
    let modal = document.createElement('div');
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.5)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.innerHTML = `<img src="${imageSrc}" style="max-width: 90%; max-height: 90%;" />`;
    document.body.append(modal);

    modal.onclick = function() {
        modal.remove();
    };
};

function playAudio() {
    let audioSrc = 'hoh.mp3';
    let audio = new Audio(audioSrc);
    audio.play();
};

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
