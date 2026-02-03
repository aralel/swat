document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            }
        });
    });

    const nav = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }
        lastScroll = currentScroll;
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section > div').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Sending...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Message Sent!';
                button.classList.remove('bg-primary-600', 'hover:bg-primary-700');
                button.classList.add('bg-green-600');
                form.reset();
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.classList.remove('bg-green-600');
                    button.classList.add('bg-primary-600', 'hover:bg-primary-700');
                }, 3000);
            }, 1500);
        });
    }
});
