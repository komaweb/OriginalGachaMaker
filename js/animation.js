//======================================
// animation.js
//======================================

export function wait(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}

export async function poyon(element){

    element.classList.add("poyon");

    await wait(280);

    element.classList.remove("poyon");

}
