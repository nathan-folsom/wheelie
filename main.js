(() => {

    const bike = document.getElementById('unique');

    document.getElementById('button').onclick = () => {
        bike.classList.toggle('no-wheelie');
        bike.classList.toggle('wheelie');
    };

    let scroll = false;

    document.getElementById('background-toggle').onclick = () => {
        scroll = !scroll;
        if (scroll) {
            loop();
        }
    };

    const pic = document.createElement('img');
    pic.src = 'bg.jpg';
    pic.classList.add('sidewalk');
    const pic2 = pic.cloneNode();

    const slide1 = {scroll: 50, element: pic};
    const slide2 = {scroll: 0, element: pic2};

    const frameRate = 30;

    let timeInterval = 3000;

    const frameDuration = 1000 / frameRate;

    document.getElementById('speed-up').onclick = () => {
        if (timeInterval >= 1000) {
            timeInterval -= 500
        }
    }

    document.getElementById('speed-down').onclick = () => {
        if (timeInterval <= 5000) {
            timeInterval += 500
        }
    }

    const calculatePercent = (pos) => {
        const next = calculateNextPercent(pos);
        if (next > 100) {
            return next - 100;
        }
        return next;
    }

    const calculateNextPercent = (pos) => {
        return pos + 100 / (timeInterval / frameDuration);
    }

    const setPosition = (element) => {
        element.scroll = calculatePercent(element.scroll);
        const position = calculatePosition(element);
        element.element.style.transform = `translateX(${position}%)`;
    }

    const calculatePosition = (element) => {
        return element.scroll * 2 - 100;
    }

    const background = document.getElementById('background');

    const loop = () => {
        setTimeout(onInterval, frameDuration);
    }

    const initialBackground = () => {
        background.appendChild(pic);
        background.appendChild(pic2);
    }

    const onInterval = () => {
        setPosition(slide1);
        setPosition(slide2);
        if (scroll) {
            loop();
        }
    }

    initialBackground();
})()