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

    // 再度アニメーションできるようにする
    void element.offsetWidth;

    element.classList.add("poyon");

    await wait(280);

    element.classList.remove("poyon");

}

export async function poyonOpen(element,callback){

    await poyon(element);

    if(callback){

        callback();

    }

}
