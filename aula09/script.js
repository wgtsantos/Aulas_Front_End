let prev = document.getElementById('prev');
prev.addEventListener('submit', function(event){

    event.preventDefault();

    let pais = document.getElementById('pais').value;
    const apiURL = `https://restcountries.com/v3.1/name/${pais}`;

    fetch(apiURL)
    .then(response => response.json()).then(data => {
         const dados_pais = data[0];
         if (dados_pais) {

            const idiomas = Object.values(dados_pais.languages).join(', ');
            const moedas = Object.values(dados_pais.currencies).map(moeda => `${moeda.name} (${moeda.symbol})`).join(', ');
            
            document.getElementById('nome_pais').textContent = `País: ${dados_pais.name.common}`; 
            document.getElementById('capital').textContent = `Capital: ${dados_pais.capital[0]}`;
            document.getElementById('idioma').textContent = `Idioma: ${idiomas}`;
            document.getElementById('moeda').textContent = `Moeda: ${moedas}`;
            document.getElementById('popu').textContent = `População: ${dados_pais.population.toLocaleString()}`;
            document.getElementById('bandeira').innerHTML = `<img src="${dados_pais.flags.png}" alt="Bandeira ${dados_pais.name.common}"/>`;

        } else {
            alert("País não Encontrado!!");
        }
    })
    .catch(error => {
        alert("Erro de rede: " + error);
    });

});