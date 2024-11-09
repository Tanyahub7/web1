// Використовуємо метод getElementById для доступу до кнопки "Спеціальні пропозиції"
const specialsButton = document.getElementById('specialsButton');
const themeButton = document.getElementById('themeButton');

// Обробник події click для кнопки "Спеціальні пропозиції"
specialsButton.addEventListener('click', function() {
    specialsList.classList.toggle('hidden');
    specialsButton.textContent = specialsList.classList.contains('hidden') 
        ? 'Дізнатись про спеціальні пропозиції' 
        : 'Сховати спеціальні пропозиції';
});

// Додаємо обробник dblclick для кнопки "Спеціальні пропозиції"
specialsButton.addEventListener('dblclick', function() {
    alert('Подвійне натискання на кнопку!');
});

// Використовуємо querySelector для доступу до списку спеціальних пропозицій
const specialsList = document.querySelector('#specialsList');
const specialsItems = document.getElementsByTagName('li');

// Додаємо обробники подій mouseover і mouseout для елементів <li>
for (let i = 0; i < specialsItems.length; i++) {
    specialsItems[i].addEventListener('mouseover', function() {
        specialsItems[i].style.backgroundColor = '#f0e68c';
    });
    specialsItems[i].addEventListener('mouseout', function() {
        specialsItems[i].style.backgroundColor = '';
    });
    specialsItems[i].addEventListener('click', function() {
        alert(`Ви вибрали: ${specialsItems[i].textContent}`);
    });
}

// Обробник події click для кнопки "Змінити фон"
const colors = ['#f9f9f9', '#e0f7fa', '#fbe9e7', '#f1f8e9', '#ffebee'];
let currentColorIndex = 0;

themeButton.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

themeButton.addEventListener('dblclick', function() {
    alert('Подвійне натискання на зміну теми!');
});

// Використовуємо querySelectorAll для доступу до всіх <p> елементів
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach((p) => {
    p.addEventListener('click', function() {
        p.style.color = '#d4a373';
    });
    p.addEventListener('dblclick', function() {
        p.style.color = '#333'; // Змінює назад колір тексту при подвійній клавіші
    });
});

// Використовуємо getElementsByName для доступу до прихованого елементу
const hiddenElement = document.getElementsByName('hiddenElement')[0];
hiddenElement.addEventListener('focus', function() {
    alert('Цей елемент прихований, але ми все ж можемо з ним взаємодіяти');
});

// Використовуємо getElementsByClassName для доступу до контактного розділу
const contactInfo = document.getElementsByClassName('contact');

// Додаємо обробник keydown для всієї сторінки
document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        alert('Контактна інформація: вул. Кавова, 12, м. Львів');
    }
    if (event.key === 't') {
        themeButton.click(); 
    }
});
