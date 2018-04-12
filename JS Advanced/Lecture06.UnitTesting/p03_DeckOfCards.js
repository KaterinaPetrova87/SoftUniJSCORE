function printDeckOfCards(arr) {
    function createCard(cardFace, cardSuit) {
        let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = {
            S: '\u2660 ',
            H: '\u2665 ',
            D: '\u2666 ',
            C: '\u2663 '
        };

        if (!validCardFaces.includes(cardFace)) {
            throw new Error('Invalid card face' + cardFace);
        }
        if (!validSuits.hasOwnProperty(cardSuit)) {
            throw new Error('Invalid card suit' + cardSuit);
        }

        let card = {
            face: cardFace,
            suit: cardSuit,
            toString: function () {
                return card.face + validSuits[card.suit];
            }
        };
        return card;
    }

    let deck = [];
    for (let i = 0; i < arr.length; i++) {
        let cardFace = arr[i].substring(0, arr[i].length - 1);
        let cardSuit = arr[i].substr(arr[i].length - 1, 1);
        try {
            deck.push(createCard(cardFace, cardSuit));
        } catch (ex) {
            console.log("Invalid card: " + arr[i]);
            return;
        }
    }
    console.log(deck.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
