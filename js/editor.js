import { createCharacter, createGacha } from "./models.js";

import {
    getGachas,
    addGacha,
    addCharacter,
    getCharacters
} from "./storage.js";

//==============================
// Element
//==============================

const saveGachaButton =
    document.getElementById("saveSeries");

const gachaName =
    document.getElementById("seriesName");

const gachaSelect =
    document.getElementById("characterGacha");

const saveCharacterButton =
    document.getElementById("saveCharacter");

const characterName =
    document.getElementById("characterName");

const characterRarity =
    document.getElementById("characterRarity");

const characterQuote =
    document.getElementById("characterQuote");

const characterDescription =
    document.getElementById("characterDescription");
const characterImage =
    document.getElementById("characterImage");

const characterPreview =
    document.getElementById("characterPreview");

let selectedImage = "";

//==============================
// 初期化
//==============================

loadGachaSelect();

//==============================
// ガチャ追加
//==============================

saveGachaButton.addEventListener(

    "click",

    ()=>{

        const name =
            gachaName.value.trim();

        if(name===""){

            alert("ガチャ名を入力してください");

            return;

        }

        const gacha =
            createGacha();

        gacha.name = name;

        addGacha(gacha);

        gachaName.value="";

        loadGachaSelect();

        alert("ガチャを作成しました");

    }

);

//==============================
// キャラクター保存
//==============================

saveCharacterButton.addEventListener(

    "click",

    ()=>{

        if(gachaSelect.value===""){

            alert("先にガチャを作成してください");

            return;

        }

        const name =
            characterName.value.trim();

        if(name===""){

            alert("キャラクター名を入力してください");

            return;

        }

        const character =
            createCharacter();

        character.gachaId =
            gachaSelect.value;

        character.name =
            name;

        character.rarity =
            Number(characterRarity.value);

        character.quote =
            characterQuote.value.trim();

        character.description =
            characterDescription.value.trim();

        character.image =
    selectedImage;

        addCharacter(character);

        characterName.value = "";
        characterRarity.value = "1";
        characterQuote.value = "";
        characterDescription.value = "";
        characterImage.value = "";

selectedImage = "";

characterPreview.src = "";

characterPreview.style.display = "none";

        alert("キャラクターを保存しました");

    }

);

//==============================
// ガチャ一覧更新
//==============================

function loadGachaSelect(){

    gachaSelect.innerHTML="";

    const gachas =
        getGachas();

    gachas.forEach(gacha=>{

        const option =
            document.createElement("option");

        option.value =
            gacha.id;

        option.textContent =
            gacha.name;

        gachaSelect.appendChild(option);

    });

}

//==============================
// 画像読み込み
//==============================

characterImage.addEventListener(

    "change",

    ()=>{

        const file =
            characterImage.files[0];

        if(!file){

            return;

        }

        const reader =
            new FileReader();

        reader.onload = ()=>{

            selectedImage =
                reader.result;

            characterPreview.src =
                selectedImage;

            characterPreview.style.display =
                "block";

        };

        reader.readAsDataURL(file);

    }

);
