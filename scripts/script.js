// Toggle navbar on mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form submission (exemplo de funcionalidade)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset(); // Limpa o formulário
});
