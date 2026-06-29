//======================================
// Original Gacha Maker
// storage.js
// IndexedDB Version
//======================================

const DB_NAME = "OriginalGachaMaker";

const DB_VERSION = 1;

const CURRENT_GACHA_KEY =
    "ogm_current_gacha";

let db = null;

export async function openDatabase(){

    if(db){

        return db;

    }

    return new Promise((resolve,reject)=>{

        const request =
            indexedDB.open(

                DB_NAME,

                DB_VERSION

            );

        request.onupgradeneeded = ()=>{

            db = request.result;

            if(

                !db.objectStoreNames.contains("gachas")

            ){

                db.createObjectStore(

                    "gachas",

                    {

                        keyPath:"id"

                    }

                );

            }

            if(

                !db.objectStoreNames.contains("characters")

            ){

                db.createObjectStore(

                    "characters",

                    {

                        keyPath:"id"

                    }

                );

            }

        };

        request.onsuccess = ()=>{

            db = request.result;

            resolve(db);

        };

        request.onerror = ()=>{

            reject(request.error);

        };

    });

}
