const heartCanvas = document.getElementById('heartCanvas');
const heartCtx = heartCanvas.getContext('2d');

if (heartCanvas && heartCtx) {
    heartCanvas.width = 600;
    heartCanvas.height = 600;

    const HEART_COLOR = '#ff69b4';

    // Рисуем сердце, используя формулу сердца
    heartCtx.fillStyle = HEART_COLOR;
    heartCtx.beginPath();

    const centerX = heartCanvas.width / 2;
    const centerY = heartCanvas.height / 2;
    const scale = 10; // Масштаб сердца

    // Начинаем с верхней точки сердца
    heartCtx.moveTo(centerX, centerY - scale * 15);

    for (let angle = 0; angle < 2 * Math.PI; angle += 0.01) {
        const x = centerX + scale * 16 * Math.sin(angle) ** 3;
        const y = centerY - scale * (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle));

        heartCtx.lineTo(x, y);
    }

    heartCtx.closePath();
    heartCtx.fill();

} else {
    console.error("Canvas сердца не найден или контекст не получен");
}