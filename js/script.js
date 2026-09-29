const cards = document.querySelectorAll('.card, .card-info, .curso');

cards.forEach((card) => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });

});