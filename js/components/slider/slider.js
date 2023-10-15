function getSlider(containerName, sliderProps)
{
    let sliderHtml = "";
    let cards = [];
    let header;
    for (let i = 0; i < sliderProps["cards"].length; i++)
    {
        cards.push(getCard(sliderProps["cards"][i]));
    }
    header = getSliderHeader(sliderProps["header"]);

    document.querySelector(`.${containerName}`).innerHTML;
    return `        <div class="slider-header">
            <div class="slider-name">Фильмы</div>
            <div class="show-more">Больше фильмов</div>
        </div>
        <div class="cards-container">
            <div class="card">
                <div class="card-poster">
                    <img src="./img/films/green_mile.png" alt="Постер фильма" width="250px" height="370px">
                </div>
                <div class="like-icon">
                    <span class="heart-icon"></span>
                </div>
                <div class="card-info">
                    <div class="card-country">США, 1999</div>
                    <div class="card-movie-name">Зеленая миля</div>
                    <div class="card-statistics">
                        <div class="imdb-statistic">
                            <img src="./img/logo/imdb.png" alt="Логотип IMDb" class="imdb-logo">
                            <div class="card-statistic">86.0/100</div>
                        </div>
                        <div class="kp-statistic">
                            <div class="kp-statistic">
                                <img src="./img/logo/КиноПоиск.png" alt="Логотип КиноПоиска" class="imdb-logo">
                                <div class="card-statistic">97%</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-genres">Драма, фэнтези, криминал</div>
                </div>
            </div>
        </div>`;
}