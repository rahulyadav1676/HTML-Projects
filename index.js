
function animateCount(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start) + "+";
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const countElement = entry.target;
            const targetValue = {
                'counting': 1000,
                'counting2': 500,
                'counting3': 388,
                'counting4': 375
            }[countElement.id];
            
            animateCount(countElement, 0, targetValue, 2000);
            observer.unobserve(countElement);
        }
    });
});


['counting', 'counting2', 'counting3', 'counting4'].forEach(id => {
    const element = document.querySelector(`#${id}`);
    if (element) observer.observe(element);
});



window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});








