let cards = document.querySelectorAll('.card-container');

for (let i = 0; i < cards.length; i++) {
    cards[i].onmouseover = function () {
        let country = cards[i].querySelector('p');
        blink(country.innerText);
    }
    cards[i].onmouseout = function () {
        cancelBlink();
    }
}

let heading = document.querySelector('h1');
function blink(country) {
    heading.classList.add('blink');
    heading.innerText = country+' capital\'s name is...';
}

function cancelBlink() {
    heading.classList.remove('blink');
    heading.innerText = 'What is the capital of...';
}