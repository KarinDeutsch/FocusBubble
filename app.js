let workTime = 25 * 60;
let breakTime = 5 * 60;
let currentTime = workTime;
let isWorkPhase = true;
let timerInterval;
let pomodoroCount = 0;
let isMuted = false;

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
const alertSound = document.getElementById('alertSound');
const muteToggle = document.getElementById('muteToggle');
const progressDotsDiv = document.getElementById('progressDots');
makeDraggable(document.getElementById('focus-bubble'));
const blockedSitesInput = document.getElementById('blockedSitesInput');

if (localStorage.getItem('workTime')) {
  workTime = parseInt(localStorage.getItem('workTime'));
}
if (localStorage.getItem('breakTime')) {
  breakTime = parseInt(localStorage.getItem('breakTime'));
}
if (localStorage.getItem('isMuted')) {
  isMuted = JSON.parse(localStorage.getItem('isMuted'));
  muteToggle.textContent = isMuted ? '🔇' : '🔊';
}
if (localStorage.getItem('pomodoroCount')) {
  pomodoroCount = parseInt(localStorage.getItem('pomodoroCount'));
}

// Setup for SVG ring
//const circle = document.getElementById("progressCircle");
//const radius = circle.r.baseVal.value;
//const circumference = 2 * Math.PI * radius;

//circle.style.strokeDasharray = `${circumference.toFixed(1)}`;
//circle.style.strokeDashoffset = `${circumference.toFixed(1)}`;
//circle.style.transition = "stroke-dashoffset 1s linear";

function startTimer() {
  clearInterval(timerInterval);
  updateDisplay();
//  updateProgressRing(0, isWorkPhase ? workTime : breakTime);

  timerInterval = setInterval(() => {
    currentTime--;

    if (currentTime <= 0) {
      if (!isMuted) alertSound.play();

      if (!isWorkPhase) {
        pomodoroCount++;
        renderProgressDots(pomodoroCount);
        localStorage.setItem('pomodoroCount', pomodoroCount.toString());

      }

      isWorkPhase = !isWorkPhase;
      currentTime = isWorkPhase ? workTime : breakTime;
      updateDisplay();
      //updateProgressRing(0, isWorkPhase ? workTime : breakTime);
      return;
    }

    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  //circle.style.strokeDashoffset = `${circumference.toFixed(1)}`;
  currentTime = isWorkPhase ? workTime : breakTime;
  pomodoroCount = 0;
  updateDisplay();
  //updateProgressRing(0, currentTime);
  renderProgressDots(pomodoroCount);
}

function updateDisplay() {
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  phaseLabel.textContent = isWorkPhase ? 'Work' : 'Break';

  const totalTime = isWorkPhase ? workTime : breakTime;
  //updateProgressRing(totalTime - currentTime, totalTime);
}

//function updateProgressRing(elapsedTime, totalTime) {
  //const progress = elapsedTime / totalTime;
  //const offset = circumference * (1 - progress);
  //circle.style.strokeDashoffset = offset.toFixed(1);
  //circle.setAttribute("stroke", isWorkPhase ? "red" : "green");
//}

function renderProgressDots(count = 0) {
  progressDotsDiv.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '50%';
    dot.style.backgroundColor = 'yellow';
    dot.style.display = 'inline-block';
    dot.style.margin = '2px';
    progressDotsDiv.appendChild(dot);
  }
}

function makeDraggable(el) {
  let isDragging = false, offsetX, offsetY;

  el.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - el.getBoundingClientRect().left;
    offsetY = e.clientY - el.getBoundingClientRect().top;
  });

  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      el.style.left = (e.clientX - offsetX) + 'px';
      el.style.top = (e.clientY - offsetY) + 'px';
    }
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });
}

// Settings
settingsIcon.addEventListener('click', () => {
    settingsPanel.classList.toggle('visible');
});

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

    const blockedSites = blockedSitesInput.value
        .split('\n')
        .map(site => site.trim())
        .filter(site => site.length > 0);

    // Save to both localStorage (for popup) and chrome.storage (for content.js)
    localStorage.setItem('blockedSites', JSON.stringify(blockedSites));
    chrome.storage.local.set({ blockedSites: blockedSites });

    updateDisplay();
    settingsPanel.classList.remove('visible');

    //save the user settings
    localStorage.setItem('workTime', workTime.toString());
    localStorage.setItem('breakTime', breakTime.toString());
});


muteToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    muteToggle.textContent = isMuted ? '🔇' : '🔊';
    localStorage.setItem('isMuted', JSON.stringify(isMuted));

});

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initial setup
updateDisplay();
//updateProgressRing(0, workTime);
renderProgressDots(pomodoroCount);

