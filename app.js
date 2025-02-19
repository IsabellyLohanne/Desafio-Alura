let listaDeAmigos = [];

function adicionarAmigo() {
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();

    if (nome && !listaDeAmigos.includes(nome)) {
        listaDeAmigos.push(nome);
        atualizarListaAmigos();
        inputNome.value = '';
        inputNome.focus();
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaDeAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let listaDeAmigosRestantes = [...listaDeAmigos];
    let sorteados = [];

    listaDeAmigos.forEach(nome => {
        let amigoSorteado;

        do {
            amigoSorteado = listaDeAmigosRestantes[Math.floor(Math.random() * listaDeAmigosRestantes.length)];
        } while (amigoSorteado === nome || sorteados.includes(amigoSorteado));

        sorteados.push(amigoSorteado);
        listaDeAmigosRestantes = listaDeAmigosRestantes.filter(amigo => amigo !== amigoSorteado);

        exibirResultado(nome, amigoSorteado);
    });
}

function exibirResultado(nome, amigoSorteado) {
    const ulResultado = document.getElementById('resultado');
    const li = document.createElement('li');
    li.textContent = `${nome} tirou ${amigoSorteado}`;
    ulResultado.appendChild(li);
}
