let escolhacpf = document.getElementById('tipocpf');
escolhacpf.onclick = function() {
    document.getElementById('escolhacpf').style.display = 'block';
    document.getElementById('escolhacnpj').style.display = 'none';
    document.getElementById('cnpj').value = '';
    document.getElementById('cpf').required = true;
    document.getElementById('cnpj').required = false;
}

let escolhacnpj = document.getElementById('tipocnpj');
escolhacnpj.onclick = function() {
    document.getElementById('escolhacnpj').style.display = 'block';
    document.getElementById('escolhacpf').style.display = 'none';
    document.getElementById('cpf').value = '';
    document.getElementById('cnpj').required = true;
    document.getElementById('cpf').required = false;
}
