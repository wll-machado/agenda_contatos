var salvar = document.getElementById('salvar');
var nome = document.getElementById('nome');
var numero = document.getElementById('numero');
var lista = document.getElementById('lista');

var listaNomes = [];
var listaNumeros = [];

var linhas = '';

salvar.addEventListener('click', function(e){
    e.preventDefault();
    let newNome = nome.value
    let newNumero = numero.value

    listaNumeros.push(newNumero);
    listaNomes.push(newNome);

    let linha = `<tr>`;
    linha += `<td>${newNome}</td>`;
    linha += `<td>${newNumero}</td>`;
    linha += `</tr>`;
    linhas += linha;

    lista.innerHTML = linhas ;
    
    nome.value = '';
    numero.value = '';
});

