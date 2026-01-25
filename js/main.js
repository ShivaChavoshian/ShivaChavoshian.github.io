/* -------------------------------------------------------------------------- */
/*                               Main Application                             */
/* -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    initScrollHeader();
    initAnimations();
    initMobileNav();
    highlightActiveLink();
});

/* -------------------------------------------------------------------------- */
/*                               Scroll Header                                */
/* -------------------------------------------------------------------------- */
function initScrollHeader() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* -------------------------------------------------------------------------- */
/*                                 Animations                                 */
/* -------------------------------------------------------------------------- */
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/* -------------------------------------------------------------------------- */
/*                                 Active Link                                */
/* -------------------------------------------------------------------------- */
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Simple check for now - assumes href corresponds exactly to filenames
        // Adjust logic if testing locally with diff folder structures
        const href = link.getAttribute('href');

        // Handle home page
        if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '/Shivachavoshian.github.io/') {
            if (href === 'index.html' || href === './index.html') {
                link.classList.add('active');
            }
        } else {
            if (href && currentPath.includes(href.replace('./', ''))) {
                link.classList.add('active');
            }
        }
    });
}

/* -------------------------------------------------------------------------- */
/*                                 Mobile Nav                                 */
/* -------------------------------------------------------------------------- */
function initMobileNav() {
    // Basic mobile menu toggle logic if we add a hamburger later
    // For now, on small screens we rely on the responsive flexible flexbox for the top nav
}
