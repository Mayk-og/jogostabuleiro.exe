# jogostabuleiro.exe

# Jogos de Tabuleiro

Projeto desenvolvido em HTML, CSS e JavaScript para cadastrar jogos de tabuleiro e apresentar os registros em uma tabela. A página pode ser publicada no GitHub Pages.

## Objetivo

Praticar formulários HTML, estilização CSS, arrays, objetos, eventos e manipulação do DOM com JavaScript.

## Funcionalidades

- Exibir três jogos cadastrados inicialmente.
- Cadastrar um jogo informando nome e categoria.
- Atualizar a tabela após cada cadastro, sem recarregar a página.
- Limpar os campos do formulário após o envio.
- Adaptar a aparência para computadores e celulares.

## Arquivos

- `index.html`: estrutura da página.
- `main.js`: cadastro e exibição dos jogos.
- `styles.css`: aparência da página.
- `README.md`: documentação do projeto.

## Como executar

1. Abra a pasta no Visual Studio Code.
2. Abra `index.html` no navegador ou utilize a extensão Live Server.
3. Digite o nome e a categoria de um jogo.
4. Clique em **Cadastrar** e confira a nova linha na tabela.

## Publicação no GitHub Pages

Se o repositório já estiver criado e sincronizado, substitua os quatro arquivos na raiz do repositório e envie as alterações para a branch `main`.

Se o GitHub Pages já estiver ativo, a nova versão será publicada após o processamento.

Caso contrário, configure:

**Settings > Pages > Build and deployment > Deploy from a branch > main > /(root)**

Clique em **Save**.

O endereço do site terá um formato semelhante a:

`https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Observação

Os dados são mantidos somente na memória do navegador. Ao atualizar a página, a tabela retorna aos três jogos iniciais. O projeto não utiliza banco de dados.
