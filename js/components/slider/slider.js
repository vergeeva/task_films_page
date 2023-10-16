function drawSlider(containerName, sliderProps)
{
    let cards = '<div class="cards-container">';
    let header;
    for (let i = 0; i < sliderProps["cards"].length; i++)
    {
        cards += getCard(sliderProps["cards"][i]);
    }
    cards += '</div>';
    header = getSliderHeader(sliderProps["header"]);

    document.querySelector(`.${containerName}`).innerHTML = header + cards;
}

let filmCards = {
    "header": {"genreTitle": "Фильмы", "showMoreText": "Больше фильмов"},
    "cards": [
        {"cardType": "movie", "photo_url": "./img/films/green_mile.png", "country": "США, 1999","filmName": "Зеленая миля", "stat": {"imdb": "86.0", "kp": "97" }, "genres": ["драма", "фэнтези", "криминал"]},
        {"cardType": "movie", "photo_url": "./img/films/opengamer.png", "country": "США, Великобритания, 2023","filmName": "Оппенгеймер", "stat": {"imdb": "82.0", "kp": "70" }, "genres": ["биография", "драма", "история"]},
        {"cardType": "movie", "photo_url": "./img/films/barbie.png", "country": "США, Великобритания, 2023","filmName": "Барби", "stat": {"imdb": "84.0", "kp": "87" }, "genres": ["комедия", "приключения", "фэнтези"]},
        {"cardType": "movie", "photo_url": "./img/films/ledy_bug.png", "country": "Франция, 2023","filmName": "Леди Баг и Супер-Кот: Пробуждение силы", "stat": {"imdb": "78.0", "kp": "94" }, "genres": ["мультфильм", "семейный", "детский"]}
    ]
};
let serialsCards = {
    "header": {"genreTitle": "Сериалы", "showMoreText": "Больше сериалов"},
    "cards": [
        {"cardType": "movie", "photo_url": "./img/serials/yelow_stone.png", "country": "США, 2016 - ...","filmName": "Йеллоустоун", "stat": {"imdb": "84.0", "kp": "75" }, "genres": ["драма", "вестерн"]},
        {"cardType": "movie", "photo_url": "./img/serials/fathers_daughters.png", "country": "Россия, 2007 - 2013","filmName": "Папины дочки", "stat": {"imdb": "76.0", "kp": "68" }, "genres": ["комедия", "семейный"]},
        {"cardType": "movie", "photo_url": "./img/serials/titans.png", "country": "Япония, 2013 - ...","filmName": "Атака титанов", "stat": {"imdb": "79.0", "kp": "71" }, "genres": ["аниме", "мультфильм", "фантастика"]},
        {"cardType": "movie", "photo_url": "./img/serials/parks.png", "country": "США, 2009 - 2015","filmName": "Парки и зоны отдыха", "stat": {"imdb": "61.0", "kp": "46" }, "genres": ["комедия"]}
    ]
};
let cartoonsCards = {
    "header": {"genreTitle": "Мультфильмы", "showMoreText": "Больше мультфильмов"},
    "cards": [
        {"cardType": "movie", "photo_url": "./img/cartoons/shrek.png", "country": "США, 2001","filmName": "Шрэк", "stat": {"imdb": "84.0", "kp": "75" }, "genres": ["мультфильм", "фантастика", "комедия"]},
        {"cardType": "movie", "photo_url": "./img/cartoons/masha.png", "country": "Россия, 2009 - ...","filmName": "Маша и Медведь", "stat": {"imdb": "76.0", "kp": "68" }, "genres": ["мультфильм", "комедия"]},
        {"cardType": "movie", "photo_url": "./img/cartoons/soul.png", "country": "США, Япония, 2020","filmName": "Душа", "stat": {"imdb": "79.0", "kp": "71" }, "genres": ["мультфильм", "драма", "приключения"]},
        {"cardType": "movie", "photo_url": "./img/cartoons/red_shoes.png", "country": "Корея Южная, 2019","filmName": "Красные туфельки и семь гномов", "stat": {"imdb": "61.0", "kp": "46" }, "genres": ["мультфильм", "фэнтези", "комедия"]}
    ]
};
let personsCards = {
    "header": {"genreTitle": "Люди в кино", "showMoreText": "Больше фильмов"},
    "cards": [
        {"cardType": "person", "photo_url": "./img/persons/actor1.png", "actorName": "Александр Баширов"},
        {"cardType": "person", "photo_url": "./img/persons/actor2.png", "actorName": "Брэд Питт"},
        {"cardType": "person", "photo_url": "./img/persons/actor3.png", "actorName": "Квентин Тарантино"},
        {"cardType": "person", "photo_url": "./img/persons/actor4.png", "actorName": "Александр Петров"}
    ]
};

drawSlider("films-slider-section", filmCards);
drawSlider("serials-slider-section", serialsCards);
drawSlider("cartoons-slider-section", cartoonsCards);
drawSlider("persons-slider-section", personsCards);