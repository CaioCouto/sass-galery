function setCardClasses(card, number) {
    card.classList.add('main-card');
    card.classList.add(`main-card--${number+1}`);
}

function setCardTitleClassesAndText(card, number) {
    titles = [
        'animais',
        'arquitetura',
        'cidade',
        'decoracao',
        'esportes',
        'natureza',
        'paisagem',
        'pessoas',
        'refeicoes',
    ]
    card.classList.add(`main-card--title`);
    card.textContent = titles[number]
}

function setCardLinkClassesAndText(card) {
    card.classList.add(`main-card--link`);
    card.setAttribute('href', '#');
    card.textContent = 'Ver mais'
}

onload = () => {
    const main = document.querySelector('.main');
    for (let i = 0; i < 9; i++) {
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardTitle = document.createElement('h2');
        const cardLink = document.createElement('a');
        setCardClasses(card, i);
        setCardTitleClassesAndText(cardTitle, i);
        setCardLinkClassesAndText(cardLink);
        cardBody.classList.add('main-card--body');
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardLink);
        card.appendChild(cardBody);
        main.appendChild(card);
    }
};