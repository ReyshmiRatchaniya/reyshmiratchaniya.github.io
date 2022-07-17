var brand = [
    'Ikea',
    'Apple',
    'Heinz',
    'Coca Cola',
    'Starbucks',
    'Mintel',
    'Sony',
    'Canon',
    'Twitter',
    'Nintendo',
    'Amazon',
    'Yahoo!',
    'BBC',
    'Nestle',
    'Cadbury',
    'Pringles',
    'Snickers',
    'Steam',
    'Subway',
    'Pepsi'
]

var style = [
    'Stranger Things',
    'Barbie',
    'A 5-year old\'s drawing',
    'A family crest',
    'Super Grungy Emo Angsty Vibes',
    '60\'s - imagine andy warhol\'s campbell soup or anything in the 60\'s lol',
    '1980\'s Vision of the Future',
    '\'GrApHiC DeSiGn iS My pAsSiOn\'',
    '80\'s Vintage Comicbooks',
    '\'draw me like one of your french girls\''
]





function newPair() {
    var randomNumberLogo = Math.floor(Math.random() * (brand.length));
    var randomNumberStyle = Math.floor(Math.random() * (style.length));
    document.getElementById('brandLogo').innerHTML = brand[randomNumberLogo];
    document.getElementById('styleOf').innerHTML = style[randomNumberStyle];
}