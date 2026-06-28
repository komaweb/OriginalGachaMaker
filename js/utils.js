
//======================================
// Original Gacha Maker
// utils.js
// 共通処理
//======================================


//======================================
// File → Base64
//======================================

export function fileToBase64(file){

    return new Promise((resolve,reject)=>{

        const reader = new FileReader();

        reader.onload = ()=>{

            resolve(reader.result);

        };

        reader.onerror = reject;

        reader.readAsDataURL(file);

    });

}


//======================================
// Stars
//======================================

export function createStars(rarity){

    return "★".repeat(rarity);

}


//======================================
// UUID
//======================================

export function createId(){

    return crypto.randomUUID();

}
