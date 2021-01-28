window.onload = () => {

    let suit = randomSuit();
    let classSuit = "";
    switch (suit) {
        case '&hearts;':
            classSuit = 'red-suit'
            break;
        case '&diams;':
            classSuit = 'red-suit'
            break;
        default:
            classSuit = 'black-suit'
    }

    document.querySelectorAll('.card-value-suit')
        .forEach(element => {
            element.classList.add(classSuit);            
            element.innerHTML = suit
        }); 
    document.querySelector(".card-number").innerHTML = randomNumber();
};

const randomNumber = () => {
    let numbers = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K"
    ];
    let iNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[iNumbers];
};

const randomSuit = () => {
    let suit = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
    let iSuit = Math.floor(Math.random() * suit.length);
    return suit[iSuit];
};

