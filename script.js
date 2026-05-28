document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Controle do Menu Mobile (Responsividade)
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
                // Atualiza estados visuais dos botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                // Filtra os elementos em tela
                cards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        card.style.opacity = '0';
                        setTimeout(() => { card.style.opacity = '1'; }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 3. Validação Básica de Envio do Formulário
    const form = document.getElementById('agrinhoForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            alert(`Obrigado pelo contato, ${nome}! A coordenação do Projeto Agrinho do CCM Érico Veríssimo agradece seu envio.`);
            form.reset();
        });
    }
});
