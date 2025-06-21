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

// Spadające płatki wiśni (serduszka)
const petalsContainer = document.getElementById('petals');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
    petal.style.opacity = Math.random();
    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), 10000);
}

setInterval(createPetal, 300);
