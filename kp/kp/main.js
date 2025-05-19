document.addEventListener('DOMContentLoaded', function() {
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

    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });

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

    const gameCards = document.querySelectorAll('.game-card');
    if (gameCards.length > 0) {
        gameCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    const guideCards = document.querySelectorAll('.guide-card');
    if (guideCards.length > 0) {
        guideCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    const newsCards = document.querySelectorAll('.news-card');
    if (newsCards.length > 0) {
        newsCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    const footerButtons = document.querySelectorAll('.footer-button');
    const overlay = document.querySelector('.footer-overlay');
    
    footerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const dropdown = document.getElementById(targetId);
            document.querySelectorAll('.footer-dropdown').forEach(d => {
                if (d.id !== targetId) {
                    d.classList.remove('active');
                }
            });
            dropdown.classList.toggle('active');
            overlay.classList.toggle('active');
            this.classList.toggle('active');
        });
    });
        overlay.addEventListener('click', function() {
        document.querySelectorAll('.footer-dropdown').forEach(d => {
            d.classList.remove('active');
        });
        document.querySelectorAll('.footer-button').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.remove('active');
    });
}); 