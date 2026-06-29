let currentStep = 0;
const dialogueBox = document.getElementById('dialogueBox');
const dialogueText = document.getElementById('dialogueText');
const dialogueBtn = document.getElementById('dialogueBtn');
const giftBtn = document.getElementById('giftBtn');

// Workflow Configuration
const steps = [
    { text: "It's your special birthday!", btn: "Next" },
    { text: "Have a look at Didi Bhai...", btn: "Next" },
    { text: "Ready for your surprise?", btn: "Let's Go" },
    { text: "The stage is set!", btn: "Turn on Lights" },
    { text: "Music makes it better 🎵", btn: "Play Music" },
    { text: "Let the colours fly! 🎈", btn: "Play Balloons" },
    { text: "Almost there...", btn: "Show the Message" }
];

function startSurprise() {
    giftBtn.style.display = 'none';
    dialogueBox.style.display = 'block';
    updateDialogue();
}

function updateDialogue() {
    dialogueText.innerText = steps[currentStep].text;
    dialogueBtn.innerText = steps[currentStep].btn;
}

function handleDialogue() {
    if (currentStep === 3) {
        document.getElementById('lightOverlay').classList.add('light-on');
    } else if (currentStep === 4) {
        const music = document.getElementById('bgMusic');
        music.play().catch(e => console.log("Audio awaiting interaction setup."));
    } else if (currentStep === 5) {
        startBalloons();
    } else if (currentStep === 6) {
        dialogueBox.style.display = 'none';
        document.getElementById('curtainSection').style.display = 'block';
        return;
    }

    currentStep++;
    updateDialogue();
}

// Balloon Generation Engine
function startBalloons() {
    const container = document.getElementById('balloonContainer');
    container.style.display = 'block';
    const colors = ['#ff2a74', '#8a2be2', '#ffd700', '#00f5d4', '#ff007f'];
    
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = (Math.random() * 95) + 'vw';
        balloon.style.animationDuration = (Math.random() * 2 + 4) + 's';
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = randomColor;
        balloon.style.color = randomColor;
        
        container.appendChild(balloon);
        setTimeout(() => balloon.remove(), 6000);
    }, 250);
}

function showGallery() {
    document.getElementById('curtainSection').style.display = 'none';
    document.getElementById('gallerySection').style.display = 'block';
}

function showPhotoMsg(msg) {
    const popup = document.getElementById('popupMsg');
    popup.innerText = msg;
    popup.style.display = 'block';
    setTimeout(() => { popup.style.display = 'none'; }, 3500);
}

function playMagic() {
    startBalloons();
    const popup = document.getElementById('popupMsg');
    popup.innerText = "✨ Magic Unlocked! Endless love to you, Didi! ✨";
    popup.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}