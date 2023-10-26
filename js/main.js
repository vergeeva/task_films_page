const loader = document.querySelector(".loader");
const loaderTitle = document.querySelector(".loader__title");
const loaderSpinner = document.querySelector(".loader__spinner");
const loaderButton = document.querySelector(".loader__button");

function hideLoader() {
    loader.classList.add("loader-hidden");
}

function showLoader() {
    loader.classList.remove("loader-hidden");
}

function showError(errorText) {
    loaderTitle.innerHTML = errorText;
    loaderSpinner.style.animationPlayState = "paused";
    loaderButton.classList.add("loader__button-visible");
}
loaderButton.addEventListener("click", () => {
    hideLoader();
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let modalWindow = document.querySelector(".mdl__window-body");


window.onclick = function(event) {
    if (event.target === modalWindow) {
        modalWindow.style.display = "none";
    }
};

document.querySelector(".mdl__close-sigh").addEventListener("click", () => {
    modalWindow.style.display = "none";
})

