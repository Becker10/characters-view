const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removeSelectionCharacter();

        character.classList.add('select');

        changeCharacterBig(character);

        changeNameCharacter(character);

        changeDescriptionCharacter(character);
    })
})

function changeDescriptionCharacter(character) {
    const descriptionCharacter = document.getElementById('describes-character');
    descriptionCharacter.innerText = character.getAttribute('data-description');
}

function changeNameCharacter(character) {
    const nameCharacter = document.getElementById('name-character');
    nameCharacter.innerText = character.getAttribute('data-name');
}

function changeCharacterBig(character) {
    const imgCharacterBig = document.querySelector('.character-big');
    const idCharacter = character.attributes.id.value;
    imgCharacterBig.src = `./src/assets/card-${idCharacter}.png`;
}

function removeSelectionCharacter() {
    const selects = document.querySelector('.select');
    selects.classList.remove('select');
}
