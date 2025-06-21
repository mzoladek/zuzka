// script.js
let currentStep = 1;

function nextStep() {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');
}

function accept() {
    document.getElementById('step5').classList.remove('active');
    document.getElementById('final').classList.add('active');
}

// Efekt unikania przycisku "Nie"
const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * 80 + 10}%`;
    noButton.style.left = `${Math.random() * 80 + 10}%`;
});

// Latające serduszka
setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.className = 'floating-heart';
    document.getElementById('hearts').appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";

    setTimeout(() => heart.remove(), 5000);
}, 500);
