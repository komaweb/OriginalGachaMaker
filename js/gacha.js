//======================================
// Original Gacha Maker
// gacha.js
//======================================

import {

    getCharacters

} from "./storage.js";

const button =
    document.getElementById("gachaButton");

const overlay =
    document.getElementById("gachaOverlay");

const resultImage =
    document.getElementById("resultImage");

const resultStars =
    document.getElementById("resultStars");

const resultName =
    document.getElementById("resultName");

const resultQuote =
    document.getElementById("resultQuote");

button.addEventListener(

    "click",

    startGacha

);

overlay.addEventListener(

    "click",

    ()=>{

        overlay.classList.remove("show");

    }

);

function startGacha(){

    const characters =
        getCharacters();

    if(characters.length===0){

        alert("キャラクターが登録されていません。");

        return;

    }

    const character =

        characters[

            Math.floor(

                Math.random()*characters.length

            )

        ];

    resultImage.src =
        character.image;

    resultName.textContent =
        character.name;

    resultQuote.textContent =
        character.quote;

    resultStars.textContent =
        "★".repeat(character.rarity);

    overlay.classList.add(

        "show"

    );

}
