import {

    getCharacters,

    getGachas

} from "./storage.js";

import {

    showCollectionCharacter

} from "./gacha.js";

function renderCollection(){

    const root =
        document.getElementById("collectionList");

    if(!root){

        return;

    }

    root.innerHTML = "";

    getGachas().forEach(gacha=>{

        const section =
            document.createElement("div");

        section.className =
            "collection-series";

        section.innerHTML = `

            <div class="collection-title">

                ${gacha.name}

            </div>

            <div
                class="collection-grid"
                id="collection-${gacha.id}">

            </div>

        `;

        root.appendChild(section);

        const grid =
            document.getElementById(

                `collection-${gacha.id}`

            );

        getCharacters()

            .filter(

                c=>c.gachaId===gacha.id

            )

            .forEach(character=>{

                const button =
                    document.createElement("button");

                button.className =
                    "collection-icon";

button.addEventListener(

    "click",

    ()=>{

        if(character.obtained){

            showCollectionCharacter(character);

        }else{

            alert("まだ出会っていません。");

        }

    }

);
                
                button.innerHTML = `

                    <img src="${
                        character.obtained
                            ? character.image
                            : "assets/ui/unknown.png"
                    }">

                `;

                grid.appendChild(button);

            });

    });

}

export {

    renderCollection

};
