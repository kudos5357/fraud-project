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

console.log("Welcome to the Fraud Awareness Portal");
//  <h2>Introduction</h2>
//  <p>This portal is designed to raise awareness about fraud and provide resources to help prevent
//  fraud.</p>
//  <h2>What is Fraud?</h2> 
//  <p>Fraud is a deliberate deception to secure unfair or unlawful gain. It can take many forms,
//  including financial fraud, identity theft, and cybercrime.</p>
//  <p>Here you can find resources and information to help you understand and prevent fraud.</p>
//  <h2>Resources</h2>  
//  <p>Access our comprehensive resources on fraud prevention, including articles, guides, and tools.</p>
//  <h2>Events and Workshops</h2>
//  <p>Participate in our events and workshops to enhance your knowledge on fraud prevention.</p>
//  <h2>Training and Certification</h2>
//  <p>Enroll in our training programs to become certified in fraud prevention techniques.</p>
//  <h2>Testimonials</h2>
//  <p>Read testimonials from users who have benefited from our fraud awareness resources.</p>
//  <h2>Success Stories</h2>    
//  <p>Explore success stories of individuals and organizations that have effectively implemented fraud prevention strategies.</p>
//  <h2>Contact Us</h2> 
//  <p>If you have any questions or need assistance, feel free to contact us.</p>
//  </body>
//  </html Stashed changes
