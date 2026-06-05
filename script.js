document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize standard structural system systems
    initNavbarScroll();
    initMobileMenu();
    initTypingEffect();
    initParticleBackground();
    initScrollReveal();
    initButtonRipples();
});

/**
 * 1. Animated Navbar Transformation on Scroll Actions
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Toggle sticky glass visual treatment
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        // Handle Active Link highlight mapping dynamically
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * 2. Mobile Nav Overlay Toggling Contexts
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    if (!menuToggle) return; // Prevent breaking on coding.html standard layouts

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Collapse immediately when interface options are targets
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
}

/**
 * 3. Dynamic High-Performance Text Typing System
 */
function initTypingEffect() {
    const targetElement = document.querySelector('.typing-text');
    if (!targetElement) return;

    const wordsArray = JSON.parse(targetElement.getAttribute('data-words'));
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeletingMode = false;

    function typeCycle() {
        const fullWordText = wordsArray[currentWordIndex];
        
        if (isDeletingMode) {
            targetElement.textContent = fullWordText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            targetElement.textContent = fullWordText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        let standardPace = isDeletingMode ? 40 : 90;

        if (!isDeletingMode && currentCharIndex === fullWordText.length) {
            standardPace = 2000; // Hold full sentence focus state
            isDeletingMode = true;
        } else if (isDeletingMode && currentCharIndex === 0) {
            isDeletingMode = false;
            currentWordIndex = (currentWordIndex + 1) % wordsArray.length;
            standardPace = 400; // Delay frame ahead of restarting execution
        }

        setTimeout(typeCycle, standardPace);
    }

    // Begin loop framework execution
    setTimeout(typeCycle, 500);
}

/**
 * 4. Procedural Clean Vector Floating Dust Particle System
 */
function initParticleBackground() {
    const canvasContainer = document.getElementById('particles');
    if (!canvasContainer) return;

    const aggregateParticlesCount = 35;

    for (let index = 0; index < aggregateParticlesCount; index++) {
        const particleElement = document.createElement('div');
        particleElement.classList.add('particle');
        
        // Randomize positional layout geometry metrics
        const inlineDimensionsSize = Math.random() * 4 + 2; 
        const horizonLocationPercent = Math.random() * 100;
        const animationTimeDuration = Math.random() * 10 + 10;
        const timelineDelayExecution = Math.random() * -20; 

        particleElement.style.width = `${inlineDimensionsSize}px`;
        particleElement.style.height = `${inlineDimensionsSize}px`;
        particleElement.style.left = `${horizonLocationPercent}%`;
        particleElement.style.animationDuration = `${animationTimeDuration}s`;
        particleElement.style.animationDelay = `${timelineDelayExecution}s`;

        canvasContainer.appendChild(particleElement);
    }
}

/**
 * 5. Native High Performance Intersection Observer Scroll Engine
 */
function initScrollReveal() {
    const elementsToReveal = document.querySelectorAll('.reveal');
    
    const configurationSettings = {
        root: null, // Default browser viewport
        threshold: 0.15, // Reveal when 15% item geometry enters framework boundaries
        rootMargin: "0px 0px -40px 0px"
    };

    const targetObserver = new IntersectionObserver((observedEntries, internalObserverInstance) => {
        observedEntries.forEach(entryItem => {
            if (entryItem.isIntersecting) {
                entryItem.target.classList.add('reveal-active');
                internalObserverInstance.unobserve(entryItem.target); // Kill tracking immediately upon activation
            }
        });
    }, configurationSettings);

    elementsToReveal.forEach(elementItem => {
        targetObserver.observe(elementItem);
    });
}

/**
 * 6. Mathematical Absolute Ripple Trigger Interactions
 */
function initButtonRipples() {
    const actionButtons = document.querySelectorAll('.ripple-btn');

    actionButtons.forEach(buttonElement => {
        buttonElement.addEventListener('click', function(clickEvent) {
            
            // Generate ripple element container
            const innerRippleSpan = document.createElement('span');
            innerRippleSpan.classList.add('ripple');
            
            // Calculate absolute layout spatial metrics relative to context wrapper
            const relativeOffsetTop = clickEvent.pageY - this.offsetTop;
            const relativeOffsetLeft = clickEvent.pageX - this.offsetLeft;

            innerRippleSpan.style.top = `${relativeOffsetTop}px`;
            innerRippleSpan.style.left = `${relativeOffsetLeft}px`;

            this.appendChild(innerRippleSpan);

            // Housekeep the DOM nodes after finishing render tracking sequences
            setTimeout(() => {
                innerRippleSpan.remove();
            }, 600);
        });
    });
}