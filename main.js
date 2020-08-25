(() => {
    // Wheelie Animation
    const bike = document.getElementById('moto');

    document.getElementById('button').onclick = () => {
        bike.classList.toggle('no-wheelie');
        bike.classList.toggle('wheelie');
    };

    // Background Scroll Animation
    let scrollEnabled = false;

    const slide1 = {scroll: 50, element: document.getElementById('slide1')};
    const slide2 = {scroll: 0, element: document.getElementById('slide2')};

    const frameRate = 30;

    let timeInterval = 3000;

    const frameDuration = 1000 / frameRate;

    document.getElementById('scroll-toggle').onclick = () => {
        scrollEnabled = !scrollEnabled;
        if (scrollEnabled) {
            loop();
        }
    }

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

    const loop = () => {
        setTimeout(nextFrame, frameDuration);
    }

    const nextFrame = () => {
        setPosition(slide1);
        setPosition(slide2);
        if (scrollEnabled) {
            loop();
        }
    }

    const setPosition = (element) => {
        element.scroll = calculatePercent(element.scroll);
        const position = calculatePosition(element);
        element.element.style.transform = `translateX(${position}%)`;
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

    const calculatePosition = (element) => {
        return element.scroll * 2 - 100;
    }
})()