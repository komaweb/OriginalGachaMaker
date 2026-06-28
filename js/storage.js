//======================================
// Original Gacha Maker
// storage.js
//======================================

const CHARACTER_KEY = "ogm_characters";
const SERIES_KEY = "ogm_series";


//======================================
// Character
//======================================

export function loadCharacters(){

    const data = localStorage.getItem(CHARACTER_KEY);

    if(!data){

        return [];

    }

    return JSON.parse(data);

}


export function saveCharacters(characters){

    localStorage.setItem(

        CHARACTER_KEY,

        JSON.stringify(characters)

    );

}


//======================================
// Series
//======================================

export function loadSeries(){

    const data = localStorage.getItem(SERIES_KEY);

    if(!data){

        return [];

    }

    return JSON.parse(data);

}


export function saveSeries(series){

    localStorage.setItem(

        SERIES_KEY,

        JSON.stringify(series)

    );

}


//======================================
// Add
//======================================

export function addCharacter(character){

    const characters = loadCharacters();

    characters.push(character);

    saveCharacters(characters);

}


export function addSeries(series){

    const seriesList = loadSeries();

    seriesList.push(series);

    saveSeries(seriesList);

}


//======================================
// Delete
//======================================

export function deleteCharacter(id){

    const characters = loadCharacters().filter(

        c => c.id !== id

    );

    saveCharacters(characters);

}


export function deleteSeries(id){

    const series = loadSeries().filter(

        s => s.id !== id

    );

    saveSeries(series);

}
