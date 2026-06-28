//======================================
// Original Gacha Maker
// editor.js
//======================================

//------------------------------
// 要素取得
//------------------------------

const seriesName = document.getElementById("seriesName");
const seriesBanner = document.getElementById("seriesBanner");

const characterSeries = document.getElementById("characterSeries");

const characterName = document.getElementById("characterName");
const characterRarity = document.getElementById("characterRarity");

const characterImage = document.getElementById("characterImage");
const characterIcon = document.getElementById("characterIcon");

const imagePreview = document.getElementById("imagePreview");
const iconPreview = document.getElementById("iconPreview");

const characterQuote = document.getElementById("characterQuote");
const characterDescription = document.getElementById("characterDescription");

const saveSeries = document.getElementById("saveSeries");
const saveCharacter = document.getElementById("saveCharacter");


//======================================
// プレビュー
//======================================

function previewImage(fileInput, preview){

    const file = fileInput.files[0];

    if(!file){

        preview.removeAttribute("src");

        return;

    }

    const reader = new FileReader();

    reader.onload = e=>{

        preview.src = e.target.result;

    };

    reader.readAsDataURL(file);

}

characterImage.addEventListener("change",()=>{

    previewImage(
        characterImage,
        imagePreview
    );

});

characterIcon.addEventListener("change",()=>{

    previewImage(
        characterIcon,
        iconPreview
    );

});


//======================================
// 仮イベント
//======================================

saveSeries.addEventListener("click",()=>{

    alert("シリーズ保存は次回実装します");

});

saveCharacter.addEventListener("click",()=>{

    console.log({

        series:

            characterSeries.value,

        name:

            characterName.value,

        rarity:

            characterRarity.value,

        quote:

            characterQuote.value,

        description:

            characterDescription.value

    });

    alert("キャラクター保存は次回実装します");

});
