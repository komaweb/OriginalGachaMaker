//======================================
// Original Gacha Maker
// gacha.js
//======================================

import {
    showPresentAnimation,
    closeAnimation
} from "./animation.js";

const dummyCharacters = [

    {
        name:"ねこ",
        image:"https://placehold.co/256x256/87CEEB/ffffff?text=1",
        stars:1,
        quote:"よろしく！"
    },

    {
        name:"いぬ",
        image:"https://placehold.co/256x256/F4A460/ffffff?text=2",
        stars:2,
        quote:"わん！"
    },

    {
        name:"うさぎ",
        image:"https://placehold.co/256x256/FFB6C1/ffffff?text=3",
        stars:3,
        quote:"ぴょん！"
    },

    {
        name:"きつね",
        image:"https://placehold.co/256x256/F08080/ffffff?text=4",
        stars:4,
        quote:"こん！"
    },

    {
        name:"ドラゴン",
        image:"https://placehold.co/256x256/FFD700/ffffff?text=5",
        stars:5,
        quote:"レア！"
    }

];

function randomCharacter(){

    return dummyCharacters[
        Math.floor(
            Math.random()*dummyCharacters.length
        )
    ];

}

function createTenResult(){

    const result=[];

    for(let i=0;i<10;i++){

        result.push(randomCharacter());

    }

    return result;

}

async function startTenGacha(){

    const results=createTenResult();

    await showPresentAnimation(results);

    showResult(results[9]);

}

function showResult(character){

    document.getElementById("resultImage").src=
        character.image;

    document.getElementById("resultName").textContent=
        character.name;

    document.getElementById("resultQuote").textContent=
        character.quote;

    document.getElementById("resultStars").textContent=
        "★".repeat(character.stars);

    document.getElementById("resultCard").style.display=
        "block";

}

window.addEventListener("DOMContentLoaded",()=>{

    const tenButton=document.getElementById("tenGachaButton");

    if(tenButton){

        tenButton.addEventListener(

            "click",

            startTenGacha

        );

    }

    document
        .getElementById("gachaOverlay")
        .addEventListener("click",e=>{

            if(e.target.id==="gachaOverlay"){

                closeAnimation();

            }

        });

});
