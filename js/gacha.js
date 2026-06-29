//======================================
// Original Gacha Maker
// gacha.js
//======================================

import {
    showPresentAnimation,
    closeAnimation
} from "./animation.js";

import {
    getCharacters
} from "./storage.js";


function randomCharacter(){

    const characters = getCharacters();

    if(characters.length===0){

        alert("キャラクターが登録されていません。");

        return null;

    }

    return characters[
        Math.floor(
            Math.random()*characters.length
        )
    ];

}

function createTenResult(){

    const result = [];

    for(let i=0;i<10;i++){

        const character = randomCharacter();

        if(character){

            result.push(character);

        }

    }

    return result;

}

async function startTenGacha(){

    const results = createTenResult();

    latestResults = results;

    await showPresentAnimation(results);

    showResult(results[9]);

}

let latestResults = [];

function showResult(character){

    document.getElementById("resultImage").src =
        character.detailImage || character.image;

    document.getElementById("resultName").textContent =
        character.name;

    document.getElementById("resultQuote").textContent =
        character.quote;

    document.getElementById("resultDescription").textContent =
        character.description;

    document.getElementById("resultStars").textContent =
        "★".repeat(character.rarity);

    document.getElementById("resultCard").style.display =
        "flex";

    renderResultIcons(character);

}

function renderResultIcons(selectedCharacter){

    const iconList =
        document.getElementById("resultIconList");

    iconList.innerHTML = "";

    latestResults.forEach(character=>{

        const button =
            document.createElement("button");

        button.className = "result-icon";

        if(character === selectedCharacter){

            button.classList.add("active");

        }

        button.innerHTML = `
            <img src="${character.image}">
        `;

        button.addEventListener("click",()=>{

            showResult(character);

        });

        iconList.appendChild(button);

    });

}



window.addEventListener("DOMContentLoaded",()=>{

    const tenButton=document.getElementById("tenGachaButton");

    if(tenButton){

        tenButton.addEventListener(

            "click",

            startTenGacha

        );

    }

    const closeButton =
        document.getElementById("closeResultButton");

    if(closeButton){

        closeButton.addEventListener("click",()=>{

            closeAnimation();

        });

    }

});
