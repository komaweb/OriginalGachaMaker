import {

    getGachas,

    addGacha,

    addCharacter

} from "./storage.js";

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

//==============================
// Element
//==============================

const saveGachaButton =
    document.getElementById("saveSeries");

const gachaName =
    document.getElementById("seriesName");

const gachaSelect =
    document.getElementById("characterGacha");


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

            alert("名前を入力してください");

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
            characterQuote.value;

        character.description =
            characterDescription.value;

        addCharacter(character);

        characterName.value="";
        characterQuote.value="";
        characterDescription.value="";
        characterRarity.value="1";

        alert("保存しました");

    }

);
