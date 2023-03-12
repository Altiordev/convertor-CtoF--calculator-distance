const distance = document.querySelector('.distance'),
    btn = document.querySelector('.btn'),
    result = document.querySelectorAll('.result');

btn.addEventListener('click', () => {
    const userDistance = distance.value;

    result[0].textContent = (+userDistance / 3.6).toFixed(1);
    result[1].textContent = (+userDistance / 20.1).toFixed(1);
    result[2].textContent = (+userDistance / 70).toFixed(1);
    result[3].textContent = (+userDistance / 800).toFixed(1);

    distance.value = '';
})

const temperature = document.querySelector('.temperature'),
    result2 = document.querySelector('.result-temperature'),
    btn2 = document.querySelector('.btn-convert');

btn2.addEventListener('click', () => {
    result2.textContent = +temperature.value * 9 / 5 + 32;
    temperature.value = '';
})