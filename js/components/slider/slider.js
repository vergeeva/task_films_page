function drawSlider(containerName, sliderProps)
{
    let cards =`<div class = "${containerName}__slider swiper-container">
        <div class="cards-container swiper-wrapper"> 
        <button class="slider__left-arrow"></button>`;
    let header;
    for (let i = 0; i < sliderProps["cards"].length; i++)
    {
        cards += getCard(sliderProps["cards"][i]);
    }
    cards += ' <button class="slider__right-arrow"></button> </div></div>';
    header = getSliderHeader(sliderProps["header"]);

    document.querySelector(`.${containerName}`).innerHTML = header + cards;
    new Swiper(`.${containerName}__slider`, {
        navigation: {
            nextEl: '.slider__right-arrow',
            prevEl: '.slider__left-arrow'
        },
        loop: false,
        slidesPerView: 4,
    })
}





