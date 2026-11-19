
// Lista inicial de jogos de tabuleiro
const jogos = [
    {
        nome: "Xadrez",
        categoria: "Estratégia"
    },
    {
        nome: "Banco Imobiliário",
        categoria: "Negociação"
    },
    {
        nome: "Detetive",
        categoria: "Investigação"
    }
];

// Busca os elementos do HTML
const formulario = document.getElementById("formJogo");
const campoNome = document.getElementById("nome");
const campoCategoria = document.getElementById("categoria");
const corpoTabela = document.getElementById("corpoTabela");

// Mostra todos os jogos na tabela
function exibir() {
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < jogos.length; posicao++) {
        const jogo = jogos[posicao];

        // Adiciona uma linha e suas três colunas
        const linha = corpoTabela.insertRow();
        linha.insertCell().textContent = posicao + 1;
        linha.insertCell().textContent = jogo.nome;
        linha.insertCell().textContent = jogo.categoria;
    }
}

// Exibe os jogos iniciais
exibir();

// Cadastra um jogo quando o formulário é enviado
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita recarregar a página

    const nome = campoNome.value.trim();
    const categoria = campoCategoria.value.trim();

    // Impede o cadastro de campos vazios
    if (nome === "" || categoria === "") {
        alert("Preencha o nome e a categoria do jogo.");
        return;
    }

    // Cria o objeto e adiciona ao array
    const jogo = {
        nome: nome,
        categoria: categoria
    };

    jogos.push(jogo);
    exibir(); // Atualiza a tabela

    formulario.reset(); // Limpa os campos
    campoNome.focus(); // Volta ao primeiro campo
});
