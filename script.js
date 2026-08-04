// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar shadow on scroll

window.addEventListener('scroll', () => {

    const nav = document.querySelector('nav');

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        nav.style.boxShadow = "none";
    }

});

// Fade-in animation on scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});