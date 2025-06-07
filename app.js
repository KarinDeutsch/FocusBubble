let workTime = 25 * 60;
let breakTime = 5 * 60;
let currentTime = workTime;
let isWorkPhase = true;
let timerInterval;

const display = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const phaseLabel = document.getElementById('phaseLabel');
const settingsIcon = document.getElementById('settingsIcon');
const settingsPanel = document.getElementById('settings');
const workInput = document.getElementById('workInput');
const breakInput = document.getElementById('breakInput');
const applySettings = document.getElementById('applySettings');

function updateDisplay() {
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  phaseLabel.textContent = isWorkPhase ? 'Work' : 'Break';
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    currentTime--;
    if (currentTime <= 0) {
      isWorkPhase = !isWorkPhase;
      currentTime = isWorkPhase ? workTime : breakTime;
      // Optional: add sound or alert here when switching phases
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  currentTime = isWorkPhase ? workTime : breakTime;
  updateDisplay();
}

// Toggle settings panel visibility when gear icon clicked
settingsIcon.addEventListener('click', () => {
  settingsPanel.classList.toggle('visible');
});

// Apply new times from inputs
applySettings.addEventListener('click', () => {
  const workMinutes = parseInt(workInput.value, 10);
  const breakMinutes = parseInt(breakInput.value, 10);

  if (isNaN(workMinutes) || workMinutes < 1 || workMinutes > 60) {
    alert('Work time must be between 1 and 60 minutes.');
    return;
  }
  if (isNaN(breakMinutes) || breakMinutes < 1 || breakMinutes > 30) {
    alert('Break time must be between 1 and 30 minutes.');
    return;
  }

  workTime = workMinutes * 60;
  breakTime = breakMinutes * 60;

  currentTime = isWorkPhase ? workTime : breakTime;
  updateDisplay();

  settingsPanel.classList.remove('visible');
});

// Button event listeners
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize display on load
phaseLabel.textContent = isWorkPhase ? "Work" : "Break";
updateDisplay();
