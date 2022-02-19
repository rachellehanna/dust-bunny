//add event listener on 'playButton'

const playButtonClick = document.getElementById("playButton");

const pageOne = document.getElementById("pageOne");

const pageTwo = document.getElementById("pageTwo");

playButtonClick.addEventListener("click", function () {
    pageOne.classList.add("fadeOut");
    playButtonClick.classList.add("fadeOut");
});

pageOne.addEventListener("transitionend", function () {
    pageOne.classList.add("hidden");
    pageTwo.classList.remove("hidden");
    pageTwo.classList.add("fadeIn");
});
