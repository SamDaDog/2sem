// Ожидаем загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    // Создаем и добавляем стили для кастомного скроллбара
    const style = document.createElement('style');
    style.textContent = `
        ::-webkit-scrollbar {
            width: 12px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--secondary-color);
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--primary-color);
            border-radius: 6px;
            border: 2px solid var(--secondary-color);
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #00c4b9;
        }
    `;
    document.head.appendChild(style);

    // Определяем текущую страницу и активируем соответствующую ссылку в навигации
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });

    // Активируем карточку гайда, если мы находимся на странице этого гайда
    const guideLinks = document.querySelectorAll('.guide-button');
    if (guideLinks.length > 0) {
        guideLinks.forEach(link => {
            if (link.getAttribute('href') === currentLocation) {
                const guideCard = link.closest('.guide-card');
                if (guideCard) {
                    guideCard.classList.add('active');
                }
            }
        });
    }

    // Добавляем плавную прокрутку для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Добавляем эффекты при наведении на карточки игр
    const gameCards = document.querySelectorAll('.game-card');
    if (gameCards.length > 0) {
        gameCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            });
        });
    }

    // Добавляем эффекты при наведении на карточки гайдов
    const guideCards = document.querySelectorAll('.guide-card');
    if (guideCards.length > 0) {
        guideCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            });
        });
    }

    // Добавляем эффекты при наведении на карточки новостей
    const newsCards = document.querySelectorAll('.news-card');
    if (newsCards.length > 0) {
        newsCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
            });
        });
    }

    // Обработка выпадающих окон в футере
    const footerButtons = document.querySelectorAll('.footer-button');
    const overlay = document.querySelector('.footer-overlay');
    
    // Добавляем обработчики для кнопок в футере
    footerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const dropdown = document.getElementById(targetId);
            // Закрываем все остальные выпадающие окна
            document.querySelectorAll('.footer-dropdown').forEach(d => {
                if (d.id !== targetId) {
                    d.classList.remove('active');
                }
            });
            // Переключаем состояние текущего окна
            dropdown.classList.toggle('active');
            overlay.classList.toggle('active');
            this.classList.toggle('active');
        });
    });

    // Закрываем выпадающие окна при клике на оверлей
    overlay.addEventListener('click', function() {
        document.querySelectorAll('.footer-dropdown').forEach(d => {
            d.classList.remove('active');
        });
        document.querySelectorAll('.footer-button').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.remove('active');
    });

    // Обработка отправки формы поддержки
    const supportForm = document.querySelector('.support-form');
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Получаем значения полей формы
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;
            
            // Логируем данные формы (в реальном приложении здесь будет отправка на сервер)
            console.log('Email:', email);
            console.log('Message:', message);
            
            // Очищаем форму и закрываем окно
            this.reset();
            document.getElementById('support').classList.remove('active');
            document.querySelector('.footer-overlay').classList.remove('active');
            document.querySelector('[data-target="support"]').classList.remove('active');
            
            // Показываем уведомление об успешной отправке
            alert('Спасибо! Ваше сообщение отправлено.');
        });
    }
}); 