const tema = document.getElementById("tema");
const body = document.body;
const navbar = document.getElementById("navTheme")

tema.addEventListener('click', () => {
    
    const tema_atual = body.getAttribute('data-bs-theme');
    
    if (tema_atual == 'light') {
        body.setAttribute('data-bs-theme', 'dark');
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        tema.textContent = "Mudar Tema Claro";
    } else {
        body.setAttribute('data-bs-theme', 'light');
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        tema.textContent = "Mudar Tema Escuro";
    }

});