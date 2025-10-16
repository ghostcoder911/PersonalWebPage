// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate skill bars on scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        }
    });
};

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add fade-in class to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Add fade-in class to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.classList.add('fade-in');
        observer.observe(category);
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing animation for hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Uncomment the line below to enable typing animation
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        if (!target) return;

        let current = 0;
        const duration = 1200; // ms
        let startTime = null;

        const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            current = Math.floor(progress * target);
            counter.textContent = current + '+';
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };

        // Start animation only when element enters viewport
        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            requestAnimationFrame(updateCounter);
        }
    });
};

// Scroll event listener for animations
window.addEventListener('scroll', () => {
    animateSkillBars();
    animateCounters();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    // Initialize particles.js (lightweight)
    if (window.particlesJS) {
        // responsive particle count
        const isMobile = window.innerWidth <= 768;
        const particleCount = isMobile ? 25 : 60;

        try {
            console.log('particles.js detected, initializing (load)...');
            particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": particleCount,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": ["#60a5fa", "#a78bfa", "#fbbf24"] },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.6, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 130,
                    "color": "#60a5fa",
                    "opacity": 0.25,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": { "enable": true, "mode": ["repulse", "grab"] },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "repulse": { "distance": 120 },
                    "push": { "particles_nb": 4 },
                    "grab": { "distance": 140, "line_linked": { "opacity": 0.6 } }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": true
            }
        });
        } catch (err) {
            console.error('particles.js initialization failed on load:', err);
        }
    }
});

// Initialize particles earlier on DOMContentLoaded too (helps single-page loads)
document.addEventListener('DOMContentLoaded', () => {
    if (window.particlesJS) {
        const isMobile = window.innerWidth <= 768;
        const particleCount = isMobile ? 25 : 60;

        try {
            console.log('particles.js detected, initializing (DOMContentLoaded)...');
            // Avoid double init: if a canvas exists inside #particles-js, don't re-init
            const container = document.getElementById('particles-js');
            const existingCanvas = container && container.querySelector('canvas');
            if (!existingCanvas) {
                particlesJS('particles-js', {
                    "particles": {
                        "number": {
                            "value": particleCount,
                            "density": { "enable": true, "value_area": 800 }
                        },
                        "color": { "value": ["#60a5fa", "#a78bfa", "#fbbf24"] },
                        "shape": { "type": "circle" },
                        "opacity": { "value": 0.6, "random": false },
                        "size": { "value": 3, "random": true },
                        "line_linked": {
                            "enable": true,
                            "distance": 130,
                            "color": "#60a5fa",
                            "opacity": 0.25,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1.2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                            "onhover": { "enable": true, "mode": ["repulse", "grab"] },
                            "onclick": { "enable": true, "mode": "push" },
                            "resize": true
                        },
                        "modes": {
                            "repulse": { "distance": 120 },
                            "push": { "particles_nb": 4 },
                            "grab": { "distance": 140, "line_linked": { "opacity": 0.6 } }
                        }
                    },
                    "retina_detect": true,
                    "config_demo": { "hide_card": true }
                });
            } else {
                console.log('particles.js canvas already exists; skipping re-init');
            }
        } catch (err) {
            console.error('particles.js initialization failed on DOMContentLoaded:', err);
        }
    } else {
        console.warn('particles.js not found (DOMContentLoaded).');
    }
});

// Add some interactive hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add smooth reveal animation for elements
const revealElements = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealElements);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    revealElements();
    animateSkillBars();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('focus', () => {
        link.style.outline = '2px solid #2563eb';
        link.style.outlineOffset = '2px';
    });
    
    link.addEventListener('blur', () => {
        link.style.outline = 'none';
    });
});

// Performance optimization: Throttle scroll events
let ticking = false;

const updateOnScroll = () => {
    animateSkillBars();
    animateCounters();
    revealElements();
    ticking = false;
};

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

