const heartCanvas = document.getElementById('heartCanvas');
const heartCtx = heartCanvas.getContext('2d');

if (heartCanvas && heartCtx) {
    heartCanvas.width = 600;
    heartCanvas.height = 600;

    const centerX = heartCanvas.width / 2;
    const centerY = heartCanvas.height / 2;
    const scale = 10;

    function drawHeartPath() {
        heartCtx.beginPath();
        heartCtx.moveTo(centerX, centerY - scale * 15);

        for (let angle = 0; angle < 2 * Math.PI; angle += 0.01) {
            const x = centerX + scale * 16 * Math.sin(angle) ** 3;
            const y = centerY - scale * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));
            heartCtx.lineTo(x, y);
        }

        heartCtx.closePath();
    }

    function animateGradient(startTime) {
        const duration = 7000;
        const currentTime = Date.now() - startTime;
        let progress = currentTime / duration;
        if (progress > 1) {
            progress = progress % 1;
        }

        const gradient = heartCtx.createLinearGradient(0, 0, heartCanvas.width, heartCanvas.height);
        const color1 = `hsl(${progress * 360}, 100%, 50%)`;
        const color2 = `hsl(${(progress + 0.33) * 360}, 100%, 50%)`;
        const color3 = `hsl(${(progress + 0.66) * 360}, 100%, 50%)`;

        gradient.addColorStop(0, color1);
        gradient.addColorStop(0.5, color2);
        gradient.addColorStop(1, color3);

        heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);

        drawHeartPath();
        heartCtx.fillStyle = gradient;
        heartCtx.fill();

        requestAnimationFrame(animateGradient.bind(null, startTime));
    }

    animateGradient(Date.now());

} else {
    console.error("Canvas сердца не найден или контекст не получен");
}
