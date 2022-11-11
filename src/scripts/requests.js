import {getFromStorage, storageSectorAdd } from "./storage.js";

const baseUrl = 'http://localhost:6278/';
const compEnd = 'companies/';
// const sector = 'Alimenticio'

export async function getAllCompanies(sector) {
    const sectorKey = "@companies:sectors"
    if (!sector  || sector == "Todos") sector = '';
    try {
        const request = await fetch(baseUrl + compEnd +sector, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${null}`
            }
        });
        const response = await request.json();
        response.forEach(elt => {
            storageSectorAdd(elt.sectors.description, sectorKey)
        });
        return response
    } catch (error) {
        console.log(error);
    }
}

export async function getForCompanie(params) {
    
}