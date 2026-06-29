//======================================
// Original Gacha Maker
// animation.js
//======================================

export function wait(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}

export async function poyon(element){

    if(!element){

        return;

    }

    element.classList.remove("poyon");

    void element.offsetWidth;

    element.classList.add("poyon");

    await wait(280);

    element.classList.remove("poyon");

}

export async function poyonOpen(element, callback){

    await poyon(element);

    if(callback){

        callback();

    }

}

//======================================
// ガチャ演出
//======================================

export async function showPresentAnimation(results){

    const overlay = document.getElementById("gachaOverlay");

    const boxes = document.querySelectorAll(".present-box");

    const grid =
    document.getElementById("presentGrid");

if(results.length===1){

    grid.classList.add("single");

}else{

    grid.classList.remove("single");

}

    boxes.forEach(box=>{

    box.style.display = "none";

});

for(let i=0;i<results.length;i++){

    boxes[i].style.display = "flex";

}

    const resultCard = document.getElementById("resultCard");

    overlay.classList.remove("hidden");

    resultCard.style.display = "none";

    // 箱をリセット
    boxes.forEach(box=>{

        box.classList.remove("open");

box.innerHTML = `
    <img
        src="assets/ui/present.png"
        class="present-image">
`;

    });

    // 1個ずつ開く
    for(let i=0;i<results.length;i++){

        const box=boxes[i];

        const character=results[i];

        await wait(180);

        await poyon(box);

        box.classList.add("open");

        box.innerHTML=`
            <img src="${character.image}">
        `;

    }

    await wait(800);

    return true;

}

export function closeAnimation(){

    document
        .getElementById("gachaOverlay")
        .classList
        .add("hidden");

}
