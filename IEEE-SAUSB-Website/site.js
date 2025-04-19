const duration = 2000;

const numberElements = document.getElementsByClassName('increasing_number');

for (let i = 0; i < numberElements.length; i++) {
    let counter = 0;
    const numberElement = numberElements[i];
    const target = Number(numberElement.textContent);
    const increment = (target - counter) / (duration / 10);

    const intervalId = setInterval(() => {
        counter += increment;
        numberElement.textContent = Math.round(counter);

        if (counter >= target) {
            numberElement.textContent = target;
            clearInterval(intervalId);
        }
    }, 10);
}
