const choiceButtons = document.querySelectorAll('[data-selection]');


choiceButtons.forEach(choiceButtons => {
    choiceButtons.addEventListener('click', e => {
        const choice = choiceButtons.dataset.selection;
        makeChoice(choice);
    })
})

function makeChoice(selection) {
    console.log(selection);
}








