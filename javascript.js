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
    'stranger things',
    'barbie',
    'a 5-year old\'s drawing',
    'a family crest',
    'super grungy emo angsty vibes',
    '60\'s - imagine andy warhol\'s campbell soup or anything in the 60\'s lol',
    '1980\'s Vision of the Future',
    '\'GrApHiC DeSiGn iS My pAsSiOn\'',
    '80\'s Vintage Comicbooks',
    '\'draw me like one of your french girls\'',
    '\'something Phoebe Buffay would create \'',
    'lines, lines, lines, and more lines',
    'pixels, 8 bit, mario kart - you get it',
    'a last minute assignment - imagine it\'s 4am, you\'ve got a design presentation but you\'ve had a little too much to drink the night before and now you are regretting your life choices',
    'minimalist boring bleh',
    'a mum running her own home business',
    'like its a luxury brand',
    'like it would belong in a neon lit street - imagine shibuya/blade runner 2047'
]





function newPair() {
    var randomNumberLogo = Math.floor(Math.random() * (brand.length));
    var randomNumberStyle = Math.floor(Math.random() * (style.length));
    document.getElementById('brandLogo').innerHTML = brand[randomNumberLogo];
    document.getElementById('styleOf').innerHTML = style[randomNumberStyle];
}