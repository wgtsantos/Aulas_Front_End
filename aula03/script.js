let info = document.getElementById('cad');
info.addEventListener('submit', function(event) {

    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let cidade = document.getElementById('cidade').value;
    let data = new Date(document.getElementById('data').value);
    let hoje = new Date();
    
    let anos = hoje.getFullYear() - data.getFullYear();

    let texto = document.createElement('p');
    texto.textContent = `Olá ${nome}, você mora em ${cidade} já faz ${anos} anos.`;
    document.body.appendChild(texto);

});