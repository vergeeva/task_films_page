function getCard(cardProps)
{
    let cardHtml = "";
    switch (cardProps["cardType"])
    {
        case "movie":
        {
            let genre = "";
            for (let i = 0; i < cardProps["genres"].length - 1; i++ )
            {
                genre += cardProps["genres"][i] + ", ";
            }
            genre += cardProps["genres"][cardProps["genres"].length - 1];
            cardHtml =
            `<div class="card">
                <div class="card-poster">
                    <img src="${cardProps["photo_url"]}" alt="Постер фильма" width="250px" height="370px">
                </div>
                <div class="like-icon">
                    <span class="heart-icon"></span>
                </div>
                <div class="card-info">
                    <div class="card-country">${cardProps["country"]}</div>
                    <div class="card-movie-name">${cardProps["filmName"]}</div>
                    <div class="card-statistics">
                        <div class="imdb-statistic">
                            <img src="./img/logo/imdb.png" alt="Логотип IMDb" class="imdb-logo">
                            <div class="card-statistic">${cardProps["stat"]["imdb"]}/100</div>
                        </div>
                        <div class="kp-statistic">
                            <div class="kp-statistic">
                                <img src="./img/logo/КиноПоиск.png" alt="Логотип КиноПоиска" class="imdb-logo">
                                <div class="card-statistic">${cardProps["stat"]["kp"]}%</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-genres">${genre}</div>
                </div>
            </div>`;
            break;
        }
        case "person":
        {
            cardHtml =
                `<div class="card">
                <div class="card-poster">
                    <img src="${cardProps["photo_url"]}" alt="Постер фильма" width="250px" height="370px">
                </div>
                <div class="card-info">
                    <div class="card-movie-name">${cardProps["actorName"]}</div>
                </div>
            </div>`;
            break;
        }
    }
    return cardHtml;
}