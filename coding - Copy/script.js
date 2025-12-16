// Function for smooth scrolling (kept from original)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').length > 1) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// New Interactive Feature: Add shadow to the header when scrolling
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', function() {
        // Add the 'scrolled' class when the scroll position is more than 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});