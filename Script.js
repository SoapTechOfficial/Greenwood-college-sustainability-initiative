function animateCounter(id, target) {
    let count = 0;

    const element = document.getElementById(id);

    const interval = setInterval(() => {
        count++;

        element.textContent = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, 20);
}

animateCounter("students", 150);
animateCounter("projects", 12);
animateCounter("gardensCount", 5);
animateCounter("goalsCount", 10);
