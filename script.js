const scenes = [...document.querySelectorAll(".scene")];
const nextButtons = [...document.querySelectorAll(".next-btn")];

const startBtn = document.getElementById("startBtn");
const backgroundMusic = document.getElementById("backgroundMusic");
const voiceAudio = document.getElementById("voiceAudio");

const musicControl = document.getElementById("musicControl");
const musicToggle = document.getElementById("musicToggle");

const playVoice1 = document.getElementById("playVoice1");
const audioStatus1 = document.getElementById("audioStatus1");
const afterVoice1 = document.getElementById("afterVoice1");

const playVoice2 = document.getElementById("playVoice2");
const audioStatus2 = document.getElementById("audioStatus2");
const afterVoice2 = document.getElementById("afterVoice2");

const choiceButtons = [...document.querySelectorAll(".choice-btn")];
const choiceResult = document.getElementById("choiceResult");
const restartBtn = document.getElementById("restartBtn");

let currentScene = 0;
let musicWasPlayingBeforeVoice = false;

function showScene(index) {
  if (index < 0 || index >= scenes.length) return;

  scenes[currentScene].classList.remove("active");
  currentScene = index;
  scenes[currentScene].classList.add("active");
}

function nextScene() {
  showScene(currentScene + 1);
}

function fadeMusic(targetVolume, duration = 700) {
  const initial = backgroundMusic.volume;
  const steps = 20;
  const stepTime = duration / steps;
  let step = 0;

  const interval = setInterval(() => {
    step++;
    const progress = step / steps;
    backgroundMusic.volume = initial + (targetVolume - initial) * progress;

    if (step >= steps) {
      clearInterval(interval);
      backgroundMusic.volume = targetVolume;
    }
  }, stepTime);
}

async function startExperience() {
  backgroundMusic.volume = 0.18;

  try {
    await backgroundMusic.play();
    musicControl.classList.remove("hidden");
  } catch (error) {
    console.log("Música não iniciou automaticamente:", error);
  }

  nextScene();
}

nextButtons.forEach(btn => btn.addEventListener("click", nextScene));
startBtn.addEventListener("click", startExperience);

musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    await backgroundMusic.play();
    musicToggle.textContent = "♪";
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = "×";
  }
});

async function playVoice({
  file,
  triggerButton,
  statusElement,
  continueButton
}) {
  triggerButton.classList.add("hidden");
  statusElement.classList.remove("hidden");

  musicWasPlayingBeforeVoice = !backgroundMusic.paused;

  if (musicWasPlayingBeforeVoice) {
    fadeMusic(0.045, 600);
  }

  voiceAudio.src = file;

  try {
    await voiceAudio.play();
  } catch (error) {
    console.error("Não foi possível reproduzir o áudio:", error);
    statusElement.innerHTML = "<span>Não consegui tocar o áudio. Toque novamente.</span>";
    triggerButton.classList.remove("hidden");
    return;
  }

  voiceAudio.onended = () => {
    statusElement.classList.add("hidden");
    continueButton.classList.remove("hidden");

    if (musicWasPlayingBeforeVoice) {
      fadeMusic(0.18, 1000);
    }
  };
}

playVoice1.addEventListener("click", () => {
  playVoice({
    file: "assets/audio/mensagem-1.mp3",
    triggerButton: playVoice1,
    statusElement: audioStatus1,
    continueButton: afterVoice1
  });
});

afterVoice1.addEventListener("click", nextScene);

playVoice2.addEventListener("click", () => {
  playVoice({
    file: "assets/audio/mensagem-2.mp3",
    triggerButton: playVoice2,
    statusElement: audioStatus2,
    continueButton: afterVoice2
  });
});

afterVoice2.addEventListener("click", nextScene);

choiceButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;

    localStorage.setItem("nossaProximaMemoria", choice);

    choiceResult.textContent = `${choice}. Anotado. Seu noivo cuidará do resto. ❤️`;
    nextScene();
  });
});

restartBtn.addEventListener("click", () => {
  voiceAudio.pause();
  voiceAudio.currentTime = 0;

  afterVoice1.classList.add("hidden");
  afterVoice2.classList.add("hidden");
  playVoice1.classList.remove("hidden");
  playVoice2.classList.remove("hidden");

  showScene(0);
});
