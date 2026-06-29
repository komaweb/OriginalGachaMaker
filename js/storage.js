//======================================
// Original Gacha Maker
// storage.js
//======================================

const GACHA_KEY = "ogm_gachas";
const CURRENT_GACHA_KEY =
    "ogm_current_gacha";
const CHARACTER_KEY = "ogm_characters";


//======================================
// 共通
//======================================

function load(key){

    const data = localStorage.getItem(key);

    if(data === null){

        return [];

    }

    return JSON.parse(data);

}

function save(key,data){

    try{

        localStorage.setItem(

            key,

            JSON.stringify(data)

        );

    }catch(error){

        alert(error.name);

        console.error(error);

    }

}

//======================================
// ガチャ
//======================================

export function getGachas(){

    return load(GACHA_KEY);

}

export function saveGachas(gachas){

    save(

        GACHA_KEY,

        gachas

    );

}

export function addGacha(gacha){

    const gachas = getGachas();

    gachas.push(gacha);

    saveGachas(gachas);

}

export function updateGacha(gacha){

    const gachas = getGachas();

    const index = gachas.findIndex(

        g=>g.id===gacha.id

    );

    if(index!==-1){

        gachas[index]=gacha;

        saveGachas(gachas);

    }

}

export function deleteGacha(id){

    const gachas = getGachas().filter(

        g=>g.id!==id

    );

    saveGachas(gachas);

}


//======================================
// キャラクター
//======================================

export function getCharacters(){

    return load(CHARACTER_KEY);

}

export function saveCharacters(characters){

    save(

        CHARACTER_KEY,

        characters

    );

}

export function addCharacter(character){

    const characters = getCharacters();

    characters.push(character);

    saveCharacters(characters);

}

export function updateCharacter(character){

    const characters = getCharacters();

    const index = characters.findIndex(

        c=>c.id===character.id

    );

    if(index!==-1){

        characters[index]=character;

        saveCharacters(characters);

    }

}

export function deleteCharacter(id){

    const characters = getCharacters().filter(

        c=>c.id!==id

    );

    saveCharacters(characters);

}


//======================================
// ガチャごとのキャラ取得
//======================================

export function getCharactersByGacha(gachaId){

    return getCharacters().filter(

        c=>c.gachaId===gachaId

    );

}


//======================================
// 現在のガチャ
//======================================

export function getCurrentGacha(){

    return localStorage.getItem(
        CURRENT_GACHA_KEY
    );

}

export function setCurrentGacha(id){

    localStorage.setItem(

        CURRENT_GACHA_KEY,

        id

    );

}

//======================================
// ガチャ削除時に所属キャラも削除
//======================================

export function deleteCharactersByGacha(gachaId){

    const characters =
        getCharacters().filter(

            character=>

                character.gachaId!==gachaId

        );

    saveCharacters(characters);

}



export function saveCharacter(character){

    const characters =
        getCharacters();

    const index =
        characters.findIndex(

            c=>c.id===character.id

        );

    if(index!==-1){

        characters[index]=character;

        saveCharacters(characters);

    }

}
