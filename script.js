const appState = {
    dustIndex: null,
    smileIndex: null,
};

const playButtonClick = document.getElementById("playButton");

const pageOne = document.getElementById("pageOne");

const pageTwo = document.getElementById("pageTwo");

const pageThree = document.getElementById("pageThree");

const pageFour = document.getElementById("pageFour");

playButtonClick.addEventListener("click", function () {
    pageOne.classList.add("fadeOut");
});

pageOne.addEventListener("transitionend", function () {
    pageOne.classList.add("hidden");
    pageTwo.classList.remove("hidden");
    pageTwo.classList.add("fadeIn");
});

//Page two

const dustForms = document.querySelectorAll(".dustForm");

dustForms.forEach(function (dustForm, index) {
    dustForm.addEventListener("click", function () {
        appState.dustIndex = index;
        pageTwo.classList.add("fadeOut");
    });
});

pageTwo.addEventListener("transitionend", function () {
    pageTwo.classList.add("hidden");
    pageThree.classList.remove("hidden");
    pageThree.classList.add("fadeIn");
});

//Page three

const smileForms = document.querySelectorAll(".smiles");

smileForms.forEach(function (smiles, index) {
    smiles.addEventListener("click", function () {
        appState.smileIndex = index;
        pageThree.classList.add("fadeOut");
    });
});

pageThree.addEventListener("transitionend", function () {
    pageThree.classList.add("hidden");

    // Before we reveal page 4 we insert the correct images into it.

    const dustBody = document.createElement("img");
    dustBody.setAttribute("src", `assets/body${appState.dustIndex + 1}.png`);
    pageFour.appendChild(dustBody);
    pageFour.classList.remove("hidden");
    pageFour.classList.add("fadein");
});
