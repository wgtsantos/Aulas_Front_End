function send(){
    let nome = document.getElementById('nome').value; 
    let cidade = document.getElementById('cidade').value; 

    // alert("Olá" + nome + ", seja bem vindo a cidade " + cidade );
    // alert(`Olá ${nome}, seja bem vindo a cidade ${cidade}`);

    // document.body.innerHTML = `Olá ${nome}, seja bem vindo a cidade ${cidade}`;

    let titulo = document.createElement('h2');
    titulo.textContent = `Olá ${nome}, seja bem vindo a cidade ${cidade}`;

    document.body.appendChild(titulo);

    return false;
}