function getSliderHeader(headProps)
{
    let sliderHeaderHtml =
        `<div class="slider-header">
            <div class="slider-name">${headProps["genreTitle"]}</div>
            <div class="show-more">${headProps["showMoreText"]}</div>
        </div>`;
    return sliderHeaderHtml;
}