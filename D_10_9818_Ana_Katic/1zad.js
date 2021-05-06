let pocSatLek1 = 7;
let pocMinLek1 = 15;
let krajSatLek1 = 14;
let krajMinLek1 = 45;

let pocSatLek2 = 13;
let pocMinLek2 = 15;
let krajSatLek2 = 20;
let krajMinLek2 = 45;

document.body.innerHTML += `<p style= "color:red;"> Početak radnog vremena prvog lekara je ${pocSatLek1}:${pocMinLek1}. </p>`;

document.body.innerHTML += `<p style= "color:red;"> Kraj radnog vremena prvog lekara je ${krajSatLek1}:${krajMinLek1}. </p>`;

document.body.innerHTML += `<p style= "color:blue;"> Početak radnog vremena drugog lekara je ${pocSatLek2}:${pocMinLek2}. </p>`;

document.body.innerHTML += `<p style= "color:blue;"> Kraj radnog vremena drugog lekara je ${krajSatLek2}:${krajMinLek2}. </p>`;

if (krajSatLek1 < pocSatLek2) {
    document.body.innerHTML += `<p style= "color:green;"> Vreme lekara se ne poklapa. </p>`;
}
else if(krajSatLek2 < pocSatLek1){
    document.body.innerHTML += `<p style= "color:green;"> Vreme lekara se ne poklapa. </p>`;
}
else if (krajSatLek1 == pocSatLek2){
    if (krajMinLek1 < pocMinLek2){
        document.body.innerHTML += `<p style= "color:green;"> Vreme lekara se ne poklapa. </p>`;
    }
    else {
        document.body.innerHTML += `<p style= "color:yellow;"> Vreme lekara se poklapa. </p>`;
        var zRad = (krajSatLek1 * 60 + krajMinLek1) - (pocSatLek2 * 60 + pocMinLek2);
        var zRadH = Math.floor(zRad / 60);
        var zRadM = zRad % 60;
    }
}
else {
    document.body.innerHTML += `<p style= "color:yellow;"> Vreme lekara se poklapa. </p>`;
    szRad = (krajSatLek1 * 60 + krajMinLek1) - (pocSatLek2 * 60 + pocMinLek2);
    zRadH = Math.floor(zRad / 60);
    zRadM = zRad % 60;
    
    
}
document.body.innerHTML += `<p style= "color:yellow;"> Vreme koje su lekari proveli zajedno na poslu je ${zRadH}h i ${zRadM}min </p>`; 