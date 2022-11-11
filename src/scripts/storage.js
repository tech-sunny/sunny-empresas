const myKey = "@notices:currentnotice";

export function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

export function storageSectorAdd(obj, key) {
    let sectorArray = getFromStorage(key);
    // console.log(sectorArray);
    let indexFound = sectorArray.findIndex(elt => elt === obj);
    if (indexFound < 0) {
        sectorArray = [obj, ...sectorArray];
    } else {
        sectorArray.splice(indexFound, 1);
        sectorArray = [obj, ...sectorArray];
    }
    localStorage.setItem(key, JSON.stringify(sectorArray))
}