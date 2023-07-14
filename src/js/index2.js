const characterList = document.getElementById('character-list');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const charactersPerPage = [16, 4, 6]; // Número de personagens exibidos por página
let currentPage = 0;

const villageNames = ['Konoha', 'Sand', 'Kages'];

// Função para exibir a página atual
function showCharacters(page) {
    const characters = characterList.getElementsByClassName('character');

    for (let i = 0; i < characters.length; i++) {
        const character = characters[i];

        if (i >= getPageStartIndex(page) && i < getPageEndIndex(page)) {
            character.style.display = 'block';
        } else {
            character.style.display = 'none';
        }
    }

    // Atualizar o texto do span com o nome da vila
    const villageSpan = document.getElementById('village');
    villageSpan.textContent = villageNames[page];

    // Adicionar classe CSS dinamicamente para o background
    const konohaSection = document.querySelector('.list-character-konoha');
    konohaSection.className = 'list-character-konoha page-' + (page + 1);
}

// Função para obter o índice inicial da página
function getPageStartIndex(page) {
    let startIndex = 0;
    for (let i = 0; i < page; i++) {
        startIndex += charactersPerPage[i];
    }
    return startIndex;
}

// Função para obter o índice final da página
function getPageEndIndex(page) {
    let endIndex = 0;
    for (let i = 0; i <= page; i++) {
        endIndex += charactersPerPage[i];
    }
    return endIndex;
}

// Função para avançar para a próxima página
function next() {
    const totalPages = charactersPerPage.length;
    currentPage = (currentPage + 1) % totalPages;
    showCharacters(currentPage);
}

// Função para voltar para a página anterior
function prev() {
    const totalPages = charactersPerPage.length;
    currentPage = (currentPage - 1 + totalPages) % totalPages;
    showCharacters(currentPage);
}

// Adicionar eventos de clique aos botões
prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);

// Exibir a primeira página inicialmente
showCharacters(currentPage);
