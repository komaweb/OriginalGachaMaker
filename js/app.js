import {
    getGachas,
    getCurrentGacha,
    setCurrentGacha
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
renderHomeGachas();

function renderHomeGachas(){

    const homeList =
        document.getElementById("homeGachaList");

    homeList.innerHTML = "";

    const gachas =
        getGachas();

    gachas.forEach(gacha=>{

        const card =
            document.createElement("div");

        card.className =
            "home-gacha-card";

        card.innerHTML = `

            ${
                gacha.banner
                ? `
                <img
                    src="${gacha.banner}">
                `
                : ""
            }

            <div
                class="home-gacha-title">

                ${gacha.name}

            </div>

        `;

        card.addEventListener(

            "click",

            ()=>{

                setCurrentGacha(gacha.id);

                document
                    .querySelector('[data-page="gacha"]')
                    .click();

            }

        );

        homeList.appendChild(card);

    });

}
