document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');

    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
            }, 500);
        }
    }

    document.addEventListener('scroll', toggleButtons);

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
