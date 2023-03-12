const h1 = document.querySelector('h1'),
    distance = document.querySelector('.distance'),
    previous = document.querySelector('.previous'),
    previous1 = document.querySelector('.previous1'),
    btn = document.querySelector('.btn'),
    result = document.querySelectorAll('.result');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const userDistance = distance.value;

    if (+userDistance < 100 && +userDistance > 1) {
        result[0].textContent = (+userDistance / 3.6).toFixed(3);
        result[1].textContent = (+userDistance / 20.1).toFixed(3);
        result[2].textContent = (+userDistance / 70).toFixed(3);
        result[3].textContent = (+userDistance / 800).toFixed(3);
    } else if (h1.textContent == 'Kim birinchi boradi?' && +userDistance < 0) {
        previous1.textContent = `Masofa minus qiymat qabul qilmaydi`
    } else if (h1.textContent == 'Who can go first?' && +userDistance < 0) {
        previous1.textContent = `The distance does not accept a minus value`
    } else if (userDistance > 0 && userDistance < 1) {
        result[0].textContent = (+userDistance / 3.6).toFixed(5);
        result[1].textContent = (+userDistance / 20.1).toFixed(5);
        result[2].textContent = (+userDistance / 70).toFixed(5);
        result[3].textContent = (+userDistance / 800).toFixed(5);
    } else {
        result[0].textContent = (+userDistance / 3.6).toFixed(1);
        result[1].textContent = (+userDistance / 20.1).toFixed(1);
        result[2].textContent = (+userDistance / 70).toFixed(1);
        result[3].textContent = (+userDistance / 800).toFixed(1);
    }
    previous.textContent = userDistance
    distance.value = '';
});

const temperature = document.querySelector('.temperature'),
    previousCelcius = document.querySelector('.previousCelcius'),
    result2 = document.querySelector('.result-temperature'),
    btn2 = document.querySelector('.btn-convert');

btn2.addEventListener('click', (e) => {
    e.preventDefault();

    previousCelcius.textContent = temperature.value

    result2.textContent = +temperature.value * 9 / 5 + 32;

    temperature.value = '';
})