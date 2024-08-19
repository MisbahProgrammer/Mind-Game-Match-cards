let cardArray = [
    {
        'name': 'laptop',
        'img': 'img/2.png'
    },
    {
        'name': 'laptop1',
        'img': 'img/3.png',
    },
    {
        'name': 'ledTv',
        'img': 'img/4.jpg',
    },
    {
        'name': 'iphone',
        'img': 'img/5.png',
    },
    {
        'name': 'headphone',
        'img': 'img/6.jpg',
    },
    {
        'name': 'electronics',
        'img': 'img/11.jpg',
    }
];

let parentDiv = document.querySelector('.card-section');
// duplicate the array using concate a mthod to merge two arrays
let gameCard = cardArray.concat(cardArray)

//Shuffle the array for the better experience of game
let shuffleCard = Array.from(gameCard).sort(() => 0.5 - Math.random());

//Matched card styling
const cardMatched = () => {
    let cardselected = document.querySelectorAll('.card-selected');
    cardselected.forEach((currelm) => {
        currelm.classList.add('card-match')
    })
}

const resetGame = () => {
    clickCount = 0;
    firstClick = '';
    secondClick = '';
    let cardselected = document.querySelectorAll('.card-selected');

    cardselected.forEach((currelm) => {
        currelm.classList.remove('card-selected')
    });

}

// selected cards
let clickCount = 0;
let firstClick = '';
let secondClick = '';
parentDiv.addEventListener('click', function (e) {
    let currCard = e.target;
    clickCount++;
    if (clickCount < 3) {
        if (clickCount === 1) {
            firstClick = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card-selected');
        } else {
            secondClick = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card-selected');
        }
    }
    if (firstClick !== "" && secondClick !== "") {
        if (firstClick === secondClick) {
            // currCard.classList.add('card-match')
            setTimeout(() => {
                cardMatched();
                resetGame();
            }, 1000)

        } else {
            setTimeout(() => {
                resetGame();
            }, 1000)
        }
    }


    if (currCard.className === 'card-section') {
        return false
    }

})


for (let i = 0; i < shuffleCard.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffleCard[i].name;
    // childDiv.style.backgroundImage= `url(${shuffleCard[i].img})`;
    let frontDev = document.createElement('div');
    frontDev.classList.add('front-card');
    let backDev = document.createElement('div');
    backDev.classList.add('back-card');
    backDev.style.backgroundImage = `url(${shuffleCard[i].img})`;
    parentDiv.appendChild(childDiv);
    childDiv.appendChild(frontDev);
    childDiv.appendChild(backDev);
}