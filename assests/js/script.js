// Highlight current page link in navbar
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links li a');
    const current = window.location.pathname.split('/').pop();
    links.forEach(link => {
        if(link.getAttribute('href') === current || (link.getAttribute('href') === 'index.html' && current === '')) {
            link.classList.add('active');
        }
    });
});
