// Snowflake animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 10000);
}

setInterval(createSnowflake, 200);

// Save and load preferences
function savePreferences() {
    const theme = document.getElementById('theme').value;
    localStorage.setItem('santaTheme', theme);
    applyPreferences();
}

function applyPreferences() {
    const theme = localStorage.getItem('santaTheme') || 'snow';
    document.getElementById('theme').value = theme;
    document.body.style.background = theme === 'lights' ? 
        'linear-gradient(to bottom, #2c3e50, #3498db)' :
        theme === 'candy' ? 
        'linear-gradient(to bottom, #e74c3c, #fff)' :
        'linear-gradient(to bottom, #1e3c72, #2a5298)';
}

// Trigger Santa animation
function triggerSantaAnimation() {
    const santaImg = document.querySelector('.santa-img');
    santaImg.style.transition = 'transform 0.5s ease';
    santaImg.style.transform = 'scale(1.2) rotate(-10deg)';
    setTimeout(() => {
        santaImg.style.transform = 'scale(1) rotate(0deg)';
    }, 500);
}

// Gift opening animation and message
function openGift() {
    const messageDiv = document.getElementById('giftMessage');
    const messages = [
        'Ho Ho Ho! You got a magical sleigh ride!',
        'Merry Christmas! Enjoy your gift of joy!',
        'Santa left you a box of holiday cheer!'
    ];
    messageDiv.textContent = messages[Math.floor(Math.random() * messages.length)];
    messageDiv.style.animation = 'none';
    void messageDiv.offsetWidth; // Trigger reflow
    messageDiv.style.animation = 'fadeIn 1s forwards';
}

// Initialize preferences
window.onload = applyPreferences;