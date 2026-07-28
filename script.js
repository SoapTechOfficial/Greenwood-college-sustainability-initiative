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

animateCounter("students", NIL);
animateCounter("projects", NIL);
animateCounter("gardensCount", NIL);
animateCounter("goalsCount", NIL);
