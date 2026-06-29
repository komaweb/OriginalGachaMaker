import {
    createGacha,
    createCharacter
} from "./models.js";

import {
    getGachas,
    addGacha,
    addCharacter,
    getCharacters,
    deleteCharacter,
    setCurrentGacha,
    getCurrentGacha
} from "./storage.js";

//==============================
// Element
//==============================

const saveGachaButton =
    document.getElementById("saveSeries");

const gachaName =
    document.getElementById("seriesName");
const seriesBanner =
    document.getElementById("seriesBanner");

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
const characterList =
    document.getElementById("characterList");
const gachaList =
    document.getElementById("gachaList");


let selectedImage = "";
let selectedDetailImage = "";
let selectedBanner = "";

//==============================
// 初期化
//==============================

loadGachaSelect();

renderCharacterList();

renderGachaList();

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

        gacha.name =
            name;

        gacha.banner =
            selectedBanner;

        addGacha(gacha);

        setCurrentGacha(gacha.id);

        selectedBanner = "";

        seriesBanner.value = "";

        gachaName.value = "";

        loadGachaSelect();

        renderCharacterList();
        renderGachaList();

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

character.detailImage =
    selectedDetailImage;
        
        addCharacter(character);

        characterName.value = "";
        characterRarity.value = "1";
        characterQuote.value = "";
        characterDescription.value = "";
        characterImage.value = "";

selectedImage = "";
selectedDetailImage = "";

characterPreview.src = "";
characterPreview.style.display = "none";

detailPreview.src = "";
detailPreview.style.display = "none";

        
renderCharacterList();
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
    const currentGacha =
    getCurrentGacha();

    gachas.forEach(gacha=>{

        const option =
            document.createElement("option");

        option.value =
            gacha.id;

        option.textContent =
            gacha.name;
        if(gacha.id===currentGacha){

    option.selected = true;

}

        gachaSelect.appendChild(option);

    });

}

//==============================
// 画像読み込み
//==============================
seriesBanner.addEventListener(

    "change",

    ()=>{

        const file =
            seriesBanner.files[0];

        if(!file){

            return;

        }

        const reader =
            new FileReader();

        reader.onload = ()=>{

            selectedBanner =
                reader.result;

        };

        reader.readAsDataURL(file);

    }

);


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

const detailImageInput =
    document.getElementById("characterDetailImage");

const detailPreview =
    document.getElementById("characterDetailPreview");

if(detailImageInput){

    detailImageInput.addEventListener("change",()=>{

        const file = detailImageInput.files[0];

        if(!file){

            return;

        }

        const reader = new FileReader();

        reader.onload = e=>{

    selectedDetailImage = e.target.result;

    detailPreview.src = selectedDetailImage;

    detailPreview.style.display = "block";

};

        

        reader.readAsDataURL(file);

    });

}

//==============================
// キャラクター一覧
//==============================

function renderCharacterList(){

    characterList.innerHTML = "";

    const characters = getCharacters();

    if(characters.length===0){

        characterList.innerHTML =
            "<p>まだキャラクターはいません。</p>";

        return;

    }

    characters.forEach(character=>{

        const card =
            document.createElement("div");

        card.className = "character-card";

        const stars =
            "★".repeat(character.rarity);

const gacha =
    getGachas().find(

        g=>g.id===character.gachaId

    );

const gachaName =
    gacha
        ? gacha.name
        : "未所属";
        
        card.innerHTML = `

    ${
        character.image
        ? `
        <img
            src="${character.image}"
            style="
                display:block;
                width:120px;
                height:120px;
                object-fit:cover;
                border-radius:18px;
                margin:0 auto 18px;
            ">
        `
        : ""
    }

    <div
        style="
            text-align:center;
            font-weight:bold;
            font-size:30px;
        ">

        ${character.name}

    </div>

    <div
        style="
            text-align:center;
            color:#f7b500;
            font-size:24px;
            margin-top:8px;
        ">

        ${stars}

    </div>

    <div
        style="
            margin:18px 0;
            padding:14px;
            border-radius:14px;
            background:#f7f8fb;
            text-align:center;
            font-style:italic;
            color:#555;
            line-height:1.6;
        ">

        ${character.quote ?? ""}

    </div>

    <div
        style="
            text-align:center;
            color:#888;
            font-size:14px;
        ">

        所属：${gachaName}

    </div>

    <div
        style="
            margin-top:18px;
            line-height:1.7;
            white-space:pre-wrap;
            color:#444;
        ">

        ${character.description || ""}

    </div>

`;
        
        const deleteButton =
            document.createElement("button");

        deleteButton.className =
            "danger-button";

        deleteButton.textContent =
            "削除";

        deleteButton.addEventListener(

            "click",

            ()=>{

                if(!confirm(

                    `「${character.name}」を削除しますか？`

                )){

                    return;

                }

                deleteCharacter(character.id);

                renderCharacterList();

            }

        );

        card.appendChild(deleteButton);

        characterList.appendChild(card);

    });

}


function renderGachaList(){

    gachaList.innerHTML = "";

    const gachas =
        getGachas();

    gachas.forEach(gacha=>{

        const card =
            document.createElement("div");

        card.className =
            "character-card";

        card.innerHTML = `

            <div
                style="
                    font-size:22px;
                    font-weight:bold;
                    margin-bottom:16px;
                ">

                ${gacha.name}

            </div>

        `;

        gachaList.appendChild(card);

    });

}
