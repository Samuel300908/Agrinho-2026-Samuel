document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile (Hamburguer)
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // 2. Sistema de Filtro Avançado (Página de Ações)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('#portfolio-grid .card');

    if (filterButtons.length > 0 && cards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove classe ativa de todos os botões e adiciona no clicado
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                cards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'block';
                        // Efeito suave de entrada
                        card.style.opacity = '0';
                        setTimeout(() => { card.style.opacity = '1'; }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 3. Formulário Profissional
    const form = document.getElementById('agrinhoForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            alert(`Mensagem processada! Obrigado por fortalecer o Agrinho 2026, ${nome}.`);
            form.reset();
        });
    }
});
