// Interatividade do Formulário de Contato
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('agrinhoForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede a página de recarregar
            
            const nome = document.getElementById('nome').value;
            
            // Mensagem elegante de sucesso
            alert(`Obrigado pelo contato, ${nome}! Nossa equipe do Projeto Agrinho 2026 recebeu sua mensagem com sucesso.`);
            
            form.reset(); // Limpa o formulário
        });
    }
});
