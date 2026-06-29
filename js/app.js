import {

    getGachas,

    getCurrentGacha,

    setCurrentGacha

} from "./storage.js";

import {

    renderCollection

} from "./collection.js";

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
        if(target==="collection"){

    renderCollection();

}
        if(target==="home"){

    renderHomeGachas();

}

    });

});

console.log("Original Gacha Maker 起動");
renderHomeGachas();
function updateGachaBanner(){

    const image =
        document.getElementById("gachaBannerImage");

    const title =
        document.getElementById("gachaBannerTitle");

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

        image.src =
            gacha.banner;

        image.style.display =
            "block";

        title.style.display =
            "none";

    }else{

        image.style.display =
            "none";

        title.style.display =
            "flex";

    }

}

function renderHomeGachas(){

    const homeList =
        document.getElementById("homeGachaList");

    homeList.innerHTML = "";

    const gachas =
        getGachas();

    gachas.forEach(gacha=>{

        const count =

    getCharacters().filter(

        character=>

            character.gachaId===gacha.id

    ).length;

const selected =

    gacha.id===getCurrentGacha();
        const card =
            document.createElement("div");
        const characterCount =
    gacha.characters
        ? gacha.characters.length
        : getGachas;

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

          <div class="home-gacha-title">

    ${gacha.name}

    <div
        style="
            margin-top:8px;
            font-size:14px;
            color:#666;
            font-weight:normal;
        ">

        全${count}種類

    </div>

    ${
        selected
        ? `
        <div
            style="
                margin-top:12px;
                display:inline-block;
                padding:6px 14px;
                border-radius:999px;
                background:#5b7cff;
                color:white;
                font-size:13px;
            ">

            選択中

        </div>
        `
        : ""
    }

</div>
        `;

  card.addEventListener(

    "click",

    ()=>{

        setCurrentGacha(gacha.id);

        renderHomeGachas();

        updateGachaBanner();

        document
            .querySelector('[data-page="gacha"]')
            .click();

    }

);

        homeList.appendChild(card);

    });

}

updateGachaBanner();
