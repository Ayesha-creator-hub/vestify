document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links ul');

    menuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Smooth scroll
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

// Search suggestion
const searchInput = document.querySelector('.search-box input');
const suggestions = ['Dashboard', 'Analytics', 'Pricing', 'About', 'Contact'];
searchInput?.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const match = suggestions.find(item => item.toLowerCase().startsWith(query));
    if (match) {
        searchInput.value = match;
    }
});
});

console.log(document.body.classList.contains('dark-mode'));


const form = document.querySelector('form');
form?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thanks for contacting VestiFi! We'll respond shortly.");
    this.reset();
});

// Animate sections on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Apply to About and Contact
document.querySelectorAll('.about, .contact').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.about, .contact, .comments').forEach(section => {
    observer.observe(section);
});

