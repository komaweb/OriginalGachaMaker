//======================================
// Original Gacha Maker
// gacha.js
//======================================
import {
    showPresentAnimation,
    closeAnimation
} from "./animation.js";

import {
    getCharacters,
    getCurrentGacha,
    saveCharacter
} from "./storage.js";


function randomCharacter(){

    const currentGacha =
        getCurrentGacha();

    let characters =
        getCharacters();

    if(currentGacha){

        characters = characters.filter(

            character=>

                character.gachaId===currentGacha

        );

    }

    if(characters.length===0){

        alert("このガチャにはキャラクターが登録されていません。");

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
async function startSingleGacha(){

    const character =
        randomCharacter();

    if(!character){

        return;

    }

    latestResults = [character];

    await showPresentAnimation(

        latestResults

    );

    showResult(character);

}

async function startTenGacha(){

    const results = createTenResult();

    latestResults = results;

    await showPresentAnimation(results);
    document.getElementById("gachaAnimation").style.display =
    "none";
    showResult(results[9]);

}

let latestResults = [];

export function showResult(character){
    
if(!character.obtained){

    character.obtained = true;

    saveCharacter(character);

}
    

document.getElementById(
    "gachaAnimation"
).style.display = "none";
    
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
export function showCollectionCharacter(character){

    latestResults = [character];

    document
        .getElementById("gachaOverlay")
        .classList
        .remove("hidden");

    document.getElementById(
        "gachaAnimation"
    ).style.display = "none";

    showResult(character);

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
    const singleButton =
    document.getElementById("singleGachaButton");

if(singleButton){

    singleButton.addEventListener(

        "click",

        startSingleGacha

    );

}

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

document.getElementById(
    "gachaAnimation"
).style.display = "";

closeAnimation();
            document.getElementById("gachaAnimation").style.display =
    "";

        });

    }

});
