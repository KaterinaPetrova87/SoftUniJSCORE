function makeCard(cardFace, cardSuit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    if (!validFaces.includes(cardFace)) {
        throw new Error('Invalid card face' + cardFace);
    }
    if (!Object.keys(validSuits).includes(cardSuit)) {
        throw new Error('Invalid card suit' + cardSuit);
    }

    let card = {
        face: cardFace,
        suit: cardSuit,
        toString: function () {
            return this.face + validSuits[this.suit];
        }
    };

    return card;
}

console.log(makeCard('A', 'S').toString());
console.log(makeCard('10', 'H').toString());
console.log(makeCard('1', 'C').toString());
