document.addEventListener('DOMContentLoaded', function() {
    const animateItems = document.querySelectorAll('.animate-up, .animate-left, .animate-right, .animate-fadeIn');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Se quiser remover a classe quando sair da tela (repetir animação), descomente a linha abaixo
                // entry.target.classList.remove('in-view');
            } else {
                 // entry.target.classList.remove('in-view');
            }
        });
    }, options);

    animateItems.forEach(item => {
        observer.observe(item);
    });
});