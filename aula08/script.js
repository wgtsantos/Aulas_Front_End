let prev = document.getElementById('prev');
prev.addEventListener('submit', function(event){

    event.preventDefault();

    let cidade = document.getElementById('cidade').value;
    const apiKey = '03ed244958564e3bac110932242404';
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}`;

    fetch(apiURL)
    .then(response => response.json()).then(data => {
        
         if (data.current) {

            document.getElementById('city').textContent = `Cidade: ${data.location.name}`; 
            document.getElementById('local').textContent = `Estado: ${data.location.region}, ${data.location.country}`;
            document.getElementById('temp').textContent = `Temperatura: ${data.current.temp_c}°C`;
            document.getElementById('condicoes').textContent = `Condições: ${data.current.condition.text}`;
            document.getElementById('img').innerHTML = `<img src="${data.current.condition.icon}" alt="icone condições"/>`;

        } else {
            alert("Cidade não Encontrada!!");
        }
    })
    .catch(error => {
        alert("Erro de rede: " + error);
    });

});