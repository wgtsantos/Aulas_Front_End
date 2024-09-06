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

window.onload = function() {
    Inputmask({
        mask: '999.999.999-99'
    }).mask(document.getElementById('cpf'));

    Inputmask({
        mask: '99.999.999/99999-99'
    }).mask(document.getElementById('cnpj'));

    Inputmask({
        mask: '(99) 99999-9999'
    }).mask(document.getElementById('tel'));

    Inputmask({
        mask: '99999-999'
    }).mask(document.getElementById('cep'));
    
    Inputmask({
        mask: '99/99/9999'
    }).mask(document.getElementById('data_nasc'));
}