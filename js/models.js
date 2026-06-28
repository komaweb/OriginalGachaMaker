
//======================================
// Original Gacha Maker
// models.js
// データモデル
//======================================


//======================================
// Character
//======================================

export function createCharacter() {

    return {

        id: crypto.randomUUID(),

        gachaId: "",

        name: "",

        rarity: 1,

        image: "",

        icon: "",

        quote: "",

        description: ""

    };

}


//======================================
// Gacha
//======================================

export function createGacha() {

    return {

        id: crypto.randomUUID(),

        name: "",

        banner: "",

        guarantee: 1,

        rates: {

            1: 40,
            2: 30,
            3: 18,
            4: 10,
            5: 2

        }

    };

}
