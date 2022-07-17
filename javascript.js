var brand = [
    'Apple',
    'Mintel',
    'Ikea',
    'Western Digital',
    'Coca Cola',
    'Starbucks',
    'Sony',
    'Canon',
    'Lonely Planet',
    'Glade',
    'Febreeze',
    'Watsons',
    'Lifebuoy',
    'Nestle',
    'Cadbury',
    'Twinings',
    'Adobe',
    'Steam',
    'Aesop',
    'Pepsi'
]

var style = [
    'Stranger Things',
    'Barbie',
    'A 5-year old\'s drawing'
]





function newPair() {
    var randomNumberLogo = Math.floor(Math.random() * (brand.length));
    var randomNumberStyle = Math.floor(Math.random() * (style.length));
    document.getElementById('brandLogo').innerHTML = brand[randomNumberLogo];
    document.getElementById('styleOf').innerHTML = style[randomNumberStyle];
}