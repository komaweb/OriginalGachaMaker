import {
    getGachas,
    getCurrentGacha
} from "./storage.js";

const buttons = document.querySelectorAll(".tab-button");
const pages = document.querySelectorAll(".page");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active"));
        pages.forEach(page => page.classList.remove("active"));

        button.classList.add("active");

        const target = button.dataset.page;

        document
            .getElementById(target)
            .classList.add("active");

    });

});

console.log("Original Gacha Maker 起動");
updateHomeBanner();

function updateHomeBanner(){

    const banner =
        document.getElementById("homeBannerImage");

    const title =
        document.getElementById("homeBannerTitle");

    const currentId =
        getCurrentGacha();

    const gacha =
        getGachas().find(

            g=>g.id===currentId

        );

    if(!gacha){

        return;

    }

    title.textContent =
        gacha.name;

    if(gacha.banner){

        banner.src =
            gacha.banner;

        banner.style.display =
            "block";

    }

}
