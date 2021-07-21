function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var button = document.querySelector('#sup__up');
var footer = document.querySelector('#ft');

button.addEventListener('click', () => {
    scrollTo(footer);
})
let price = 900



function show_this() {
    document.getElementById('show').innerHTML = price * 2
}
let left = 100

const promos = [
    'hackathon2021', 'jojoreference', 'aaaаrTeam',
    'promo', '1111'
]
let sell = 0.8