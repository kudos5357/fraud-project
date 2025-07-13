// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Mobile navigation toggle (if you want to implement it)
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Navigation';
toggleButton.style.margin = '20px auto';
toggleButton.style.display = 'block';
toggleButton.style.backgroundColor = '#00bfff';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.padding = '10px 20px';
toggleButton.style.cursor = 'pointer';
    
document.querySelector('.container').insertBefore(toggleButton, navLinks);

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});
