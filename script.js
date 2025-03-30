// Функция для копирования IP адреса
function copyIP() {
    const ip = 'play.atomworld.fun';
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP адрес скопирован в буфер обмена!');
    }).catch(err => {
        console.error('Ошибка при копировании IP:', err);
    });
}

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления элементов при прокрутке
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature, .step, .rules ul li').forEach(el => {
    observer.observe(el);
});