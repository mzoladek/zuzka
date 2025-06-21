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

// Latające serduszka usunięte (pozostają tylko czarne serca jako płatki)

// Spadające płatki wiśni (czarne serduszka)
const petalsContainer = document.getElementById('petals');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (6 + Math.random() * 6) + 's';
    petal.style.opacity = Math.random();
    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 300);
