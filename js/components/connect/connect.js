const API_KEY = "CW9B4J8-0VQ4E8T-PQCBA4N-XQV2XKM";
const BASE_URL = "https://api.kinopoisk.dev/";
const VERSION_1 = 'v1';
const VERSION_2 = 'v1.2';
const VERSION_3 = 'v1.3';
function sendRequest(url = '', options = {})
{
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}${url}`, {
            ...options,
            headers:
            {
                'X-API-KEY': 'CW9B4J8-0VQ4E8T-PQCBA4N-XQV2XKM',
                ...options.headers
            }
        }).then((response) => {
            if (response.ok)
            {
                response.json().then((data) => {
                    resolve({
                        data,
                        success: true,
                        errorText: null
                    })
                }).catch((e) => {
                    reject({
                        data: null,
                        success: false,
                        errorText: e.message
                    })
                })
            }
            else
            {
                response.json().then((data) => {
                    reject({
                        data,
                        success: true,
                        errorText: null
                    })
                }).catch((e) => {
                    reject({
                        data: null,
                        success: false,
                        errorText: e.message
                    })
                })
            }
        }).catch((error) => {
            error.json().then((data) => {
                reject({
                    data,
                    success: true,
                    errorText: null
                })
            }).catch((e) => {
                reject({
                    data: null,
                    success: false,
                    errorText: e.message
                })
            })
        })
    })
}


function getCardsData(type)
{
    const params = new URLSearchParams();
    params.append('type', type);

    return new Promise((resolve) => {
        sendRequest(`${VERSION_3}/movie?${params.toString()}`)
            .then((response) => {
                resolve(response.data?.docs || [])
            }).catch((e) => {
                console.log(e.message);
                resolve([]);
        })
    })
}
function getPersonsData()
{
    const params = new URLSearchParams();
    params.append('selectFields', 'photo name');
    params.append('name', '!null');
    params.append('photo', '!null');

    return new Promise((resolve) => {
        sendRequest(`${VERSION_1}/person?${params.toString()}`)
            .then((response) =>
            {
                resolve(response.data?.docs || [])
            }).catch((e) => {
            console.log(e.message);
            resolve([]);
        })
    })
}
async function createPersonsSlider()
{
    const persons = await getPersonsData();
    if (!persons.length) return;
    let cards = [];
    persons.forEach((value) => {
        cards.push(
            {
                "cardType": "person",
                "photo_url": value["photo"].includes('https:https') ? value["photo"].replace(/(^https:)/gi, ""):  value["photo"],
                "actorName": value["name"]
            }
        );
    })
    return cards;
}
async function createMoviesSlider(type, cardType)
{
    const movies = await getCardsData(type);
    if (!movies.length) return;
    let cards = [];
    // console.log(movies);
    movies.forEach((value) => {
        let country = Object.keys(value["countries"]).map(key => {
            return value["countries"][key];
        })
        cards.push
        ({
            "cardType": cardType,
            "photo_url": value["poster"]["previewUrl"],
            "country": Object.keys(country).map(key => {
                return country[key]["name"];
            }),
            "year": value["year"],
            "filmName": value["name"],
            "stat": {"imdb": value["rating"]["imdb"], "kp": value["rating"]["kp"] },
            "genres": Object.keys(value["genres"]).map(key => {
                return value["genres"][key]["name"];
            })
        });
    })
    return cards;
}

createMoviesSlider('movie', 'movie').then((cards) =>
{
    console.log("Фильмы", cards);
    let filmCards = {
        "header": {"genreTitle": "Фильмы", "showMoreText": "Больше фильмов"},
        "cards": cards
    }
    drawSlider("films-slider-section", filmCards);
}).catch((e) =>
{
    console.log("Чет все опрокинулось с ошибкой - ", e.message);
    showError("Упс! Произошла ошибка: " + e.message);
});


createMoviesSlider('tv-series', 'movie').then((cards) =>
{
    console.log("Сериалы",cards);
    let serialsCards = {
        "header": {"genreTitle": "Сериалы", "showMoreText": "Больше сериалов"},
        "cards": cards
    }
    drawSlider("serials-slider-section", serialsCards);
}).catch((e) =>
{
    console.log("Чет все опрокинулось с ошибкой - ", e.message);
    showError("Упс! Произошла ошибка: " + e.message);
});

createMoviesSlider('cartoon', 'movie').then((cards) =>
{
    console.log("Мультфильмы: ",cards);
    let cartoonsCards = {
        "header": {"genreTitle": "Мультфильмы", "showMoreText": "Больше мультфильмов"},
        "cards": cards
    }
    drawSlider("cartoons-slider-section", cartoonsCards);
}).catch((e) =>
{
    console.log("Чет все опрокинулось с ошибкой - ", e.message);
    showError("Упс! Произошла ошибка: " + e.message);
});


createPersonsSlider().then((cards) =>
{
    console.log("Персоны", cards);
    let personsCards = {
        "header": {"genreTitle": "Люди в кино", "showMoreText": "Больше фильмов"},
        "cards": cards
    }
    drawSlider("persons-slider-section", personsCards);
}).catch((e) =>
{
    console.log("Чет все опрокинулось с ошибкой - ", e.message);
    showError("Упс! Произошла ошибка: " + e.message);
});

function getBannerData()
{///v1.3/movie/random - для баннера
    return new Promise((resolve) => {
        sendRequest(`${VERSION_3}/movie/random`)
            .then((response) =>
            {
                resolve(response.data || [])
            }).catch((e) => {
            console.log(e.message);
            resolve([]);
        })
    })
}
async function createBanner()
{
    const bannerData = await getBannerData();
    // if (!bannerData.length) return;
    console.log(bannerData);
    let banner = {
            "filmName": bannerData["name"],
            "stat": {"imdb": bannerData["rating"]["imdb"], "kp": bannerData["rating"]["kp"] },
            "bannerImgUrl": bannerData.backdrop?.url !== null ? bannerData.backdrop?.url : bannerData.poster?.url,
            "trailer": {"link": bannerData.videos?.trailers[0]?.url, "title": bannerData.videos?.trailers[0]?.name},
            "filmShortCaption": bannerData["description"] ? bannerData["description"] : "Описание в отпуске"
        };
    return banner;
}
createBanner().then((banner) =>
{
    console.log("Баннер - ", banner);
    drawBanner('banner-section', banner);
    document.querySelector(".mdl__title").innerText = banner.trailer?.title ? banner.trailer?.title : "Трейлер вышел покурить, послушайте лофи :)";
    document.querySelector(".mdl-body__frame-trailer").setAttribute("src", banner.trailer?.link ? banner.trailer?.link : "https://www.youtube.com/embed/jfKfPfyJRdk?si=gTsh4t9Q_40ld8mM");
    document.querySelector(".btn-watch-trailer").addEventListener("click", () => {
        modalWindow.style.display = "block";
    })
    sleep(2000).then(r => hideLoader());
}).catch((e) =>
{
    console.log("Чет все опрокинулось с ошибкой - ", e.message);
    showError("Упс! Произошла ошибка: " + e.message);
});
