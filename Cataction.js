// Video control functions
function playVideo(button) {
    const video = button.closest('.video-wrapper').querySelector('video');
    if (video) video.play();
}

function pauseVideo(button) {
    const video = button.closest('.video-wrapper').querySelector('video');
    if (video) video.pause();
}

function stopVideo(button) {
    const video = button.closest('.video-wrapper').querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Like button toggle function (used in Mofaim.html)
function toggleLike(btnId) {
    const btn = document.getElementById(btnId);
    if (btn) {
        btn.innerText = btn.innerText.includes('👍') ? '❤️ Liked' : '👍 Like';
    }
}

// Background canvas animation (if used)
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('backgroundCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Example background drawing function (adjust as needed for desired effect)
        // This one draws a random pink circle every second
        function drawBackground() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = 30 + Math.random() * 50;
            ctx.fillStyle = `rgba(255, 105, 180, ${Math.random()})`;
            ctx.beginPath();
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
        setInterval(drawBackground, 1000);
    }
});

// Multi-timezone clocks (if the page contains div[data-timezone])
function updateTimeZoneClocks() {
    const now = new Date();
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    document.querySelectorAll('div[data-timezone]').forEach(div => {
        const timeZone = div.dataset.timezone;
        const output = div.querySelector('output');
        if (!timeZone || !output) return;

        const timeString = new Intl.DateTimeFormat('en-GB', {
            ...timeOptions,
            timeZone
        }).format(now);

        output.textContent = timeString + ' (' + timeZone + ')';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('div[data-timezone]')) {
        updateTimeZoneClocks();
        setInterval(updateTimeZoneClocks, 1000);
    }
});


