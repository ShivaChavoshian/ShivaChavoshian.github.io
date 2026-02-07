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
    const scrollIndicator = document.querySelector('.scroll-indicator');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide scroll indicator when user scrolls
        if (scrollIndicator) {
            if (window.scrollY > 100) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
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
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') &&
                !navToggle.contains(e.target) &&
                !navLinks.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}
