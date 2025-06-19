const loaderQuotes = [
    "Loading time arrival predidctor...",
    "Downloading: Baita zit zaytun...",
    "Optimizing fake argan oil particles...",
    "Loading excuses I mean predictions...",
];

window.addEventListener("DOMContentLoaded", () => {
    const bar = document.getElementById("loader-bar");
    const btn = document.getElementById("enter-btn");
    const quote = document.getElementById("loader-quote");
    const loader = document.getElementById("fake-loader");

    quote.textContent = `"${loaderQuotes[Math.floor(Math.random() * loaderQuotes.length)]}"`;

    setTimeout(() => {
        bar.style.width = "100%";
    }, 100);

    setTimeout(() => {
        btn.classList.remove("hidden");
    }, 3000);

    btn.addEventListener("click", () => {
        const clickSound = new Audio("minecraft-click.mp3");
        clickSound.play();

        const anthem = new Audio("morocco-anthem.mp3");
        anthem.loop = true;
        anthem.play();

        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.remove();
        }, 800);
    });
});

function predictArrival() {
    const friendTimeInput = document.getElementById("friend_time");
    const predictionOutput = document.getElementById("prediction");

    if (!friendTimeInput.value) {
        predictionOutput.textContent = "⛔️ Please enter a time first.";
        return;
    }

    const [hours, minutes] = friendTimeInput.value.split(":").map(Number);
    const friendTime = new Date();
    friendTime.setHours(hours);
    friendTime.setMinutes(minutes + 60);

    const predictedHours = String(friendTime.getHours()).padStart(2, "0");
    const predictedMinutes = String(friendTime.getMinutes()).padStart(2, "0");

    predictionOutput.textContent = `He will come around ${predictedHours}:${predictedMinutes} (Moroccan Standard Time™)`;

    let racistAudio = 'racist.mp3';
    let audioRacist = new Audio(racistAudio);
    audioRacist.play();
}

function calculateRealTime() {
    const realTimePredictionOutput = document.getElementById("real_time_prediction");
    realTimePredictionOutput.innerHTML = "He's going to be there in around 30 minutes including a bathroom break";

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

const allPhrases = [
    "Bomba",
    "Ik echte water halen ja",
    "Even eten halen zegt hij",
    "Koelvloeistof werkt niet",
    "Ik kom zo",
    "Synoniem voor zometeen",
    "Griekenland",
    "Baita",
    "Cristiano el bichooo ronaldooo"
];

let remainingPhrases = [...allPhrases];

function predictFiveMinutes() {
    const now = new Date();
    const min = 15;
    const max = 45;
    const extraMinutes = Math.floor(Math.random() * (max - min + 1)) + min;
    now.setMinutes(now.getMinutes() + extraMinutes);

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    if (remainingPhrases.length === 0) {
        remainingPhrases = [...allPhrases];
    }

    const index = Math.floor(Math.random() * remainingPhrases.length);
    const phrase = remainingPhrases[index];

    remainingPhrases.splice(index, 1);

    showFloatingMessage(`Hij komt rond ${hours}:${minutes} – ${phrase}`);
}


let toastTimeout;
let activeAudio;

function showFloatingMessage(message) {
    const toast = document.getElementById("floating-toast");

    if (activeAudio) {
        activeAudio.pause();
        activeAudio.currentTime = 0;
    }

    activeAudio = new Audio("woo.mp3");
    activeAudio.play();

    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    toast.textContent = message;
    toast.classList.remove("hidden", "opacity-0");

    void toast.offsetWidth;

    toast.classList.add("opacity-100");

    toastTimeout = setTimeout(() => {
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0");

        setTimeout(() => {
            toast.classList.add("hidden");
        }, 300);

        activeAudio.pause();
        activeAudio.currentTime = 0;
    }, 3000);
}


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
    }
}

function playAudio() {
    let audioSrc = 'hoh.mp3';
    let audio = new Audio(audioSrc);
    audio.play();
}

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
