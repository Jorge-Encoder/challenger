//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

//função para adicionar os nomes
function AdicionarNome() {
    const inputNome = document.getElementById('nomeInput');
    const nome = inputNome.value.trim();

    //validar a entrada
    if (nome === '') {
        alert('Por favor, insira um nome');
        return;
    }

    //adicionar nomes à lista
    nomes.push(nome);
    inputNome.value = ''; //limpar o campo de entrada
    visualizarLista();
}

//função para visualizar lista de nomes
function visualizarLista() {
    const lista = document.getElementById('listaNomes');
    lista.innerHTML = ''; //limpar a lista atual

    //adicionar cada nome à lista visível
    nomes.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    })
}

//função para sortear um amigo
function sortearAmigo() {
    if (nomes.length === 0) {
        alert ('A lista está vazia. Insira nomes antes do sorteio');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceAleatorio];
    alert('o amigo sorteado é:' ${amigoSorteado});
}

//adicionando evento aos botões
document.getElementById('AdicionarBtn').addEventListener('click', AdicionarNome);
document.getElementById('sortearBtn').addEventListener('click', sortearAmigo);