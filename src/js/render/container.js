export default (container, name) => {
    const card = document.createElement('div');
    card.classList.add('card', 'border-0');
    container.append(card);

    const h2 = document.createElement('h4');
    h2.classList.add('card-title', 'h4');
    h2.textContent = name;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.append(h2);
    card.append(cardBody);

    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'border-0', 'rounded-0');
    card.append(ul);
};
