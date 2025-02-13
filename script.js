const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainScreen = document.querySelector('.main-screen');
const loveScreen = document.querySelector('.love-screen');
const loveText = document.querySelector('.love-text');

function animationEnd(element, animationName) {
    return new Promise(resolve => {
        element.addEventListener('animationend', event => {
            if (event.animationName === animationName) {
                resolve();
            }
        }, { once: true });
    });
}

if (yesButton) {
    yesButton.addEventListener('click', async () => {
        mainScreen.classList.add('hidden');
        loveScreen.classList.remove('hidden');

        await animationEnd(loveText, 'fadeOut');

        const heartCanvas = document.getElementById('heartCanvas');
        if (heartCanvas) {
            heartCanvas.style.display = 'block';
            startHeartAnimation();
            console.log("Анимация запущена");
        } else {
            console.error("heartCanvas не найден");
        }
    });
} else {
    console.error("Кнопка 'ДА' не найдена!");
}

noButton.addEventListener('click', (event) => {
    event.preventDefault();
});