var brand = [
    'Apple',
    'Mintel'
]

var style = [
    'Stranger Things'
]





function newPair() {
    var randomNumberLogo = Math.floor(Math.random() * (brand.length));
    var randomNumberStyle = Math.floor(Math.random() * (style.length));
    document.getElementById('brandLogo').innerHTML = brand[randomNumberLogo];
    document.getElementById('styleOf').innerHTML = style[randomNumberStyle];
}