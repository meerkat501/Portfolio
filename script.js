document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const currentSection = document.querySelector('.section.active');
            const nextSection = document.querySelector(this.getAttribute('href'));

            if (currentSection) currentSection.classList.remove('active');
            if (nextSection) nextSection.classList.add('active');

            const currentActiveLink = document.querySelector('.nav-link.active');
            if (currentActiveLink) currentActiveLink.classList.remove('active');
            this.classList.add('active');

            history.pushState(null, null, this.getAttribute('href'));
        });
    });
});
