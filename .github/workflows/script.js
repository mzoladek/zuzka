let currentStep = 1;

function nextStep() {
    document.getElementById(`step${currentStep}`).classList.remove('active');
    currentStep++;
    document.getElementById(`step${currentStep}`).classList.add('active');
}

function accept() {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('final').classList.add('active');
}

// Efekt unikania przycisku "Nie"
const noButton = document.getElementById('no-button');

noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute';
    noButton.style.top = `${Math.random() * 80 + 10}%`;
    noButton.style.left = `${Math.random() * 80 + 10}%`;
});
