function drawBanner(containerName, bannerProps)
{
    document.querySelector(`.${containerName}`).innerHTML =
    `
            <div class="banner-content">
            <span class="film-name">${bannerProps["filmName"]}</span>
            <div class="rating-container">
                <div class="imdb-statistic">
                    <img src="./img/logo/imdb.png" alt="Логотип IMDb" class="imdb-logo">
                    <div class="statistic">${bannerProps["stat"]["imdb"]}/10</div>
                </div>
                <div class="kp-statistic">
                    <div class="kp-statistic">
                        <img src="img/logo/kp.png" alt="Логотип КиноПоиска" class="imdb-logo">
                        <div class="statistic">${bannerProps["stat"]["kp"].toFixed(2)}</div>
                    </div>
                </div>
            </div>
            <div class="film-short-caption"><span>${bannerProps["filmShortCaption"]}</span></div>
            <button class="btn-watch-trailer">
                <span class="start-icon"></span>
                Трейлер
            </button>
        </div>
        <div class="banner-wrapper">
            <img src="${bannerProps["bannerImgUrl"]}" alt="Баннер фильма" class="banner-image">
        </div>
    `;
}
