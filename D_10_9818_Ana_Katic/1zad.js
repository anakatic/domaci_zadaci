let pocSatLek1 = 6;
let pocMinLek1 = 0;
let krajSatLek1 = 9;
let krajMinLek1 = 00;

let pocSatLek2 = 7;
let pocMinLek2 = 0;
let krajSatLek2 = 12;
let krajMinLek2 = 0;

let pmin1 = pocSatLek1 * 60 + pocMinLek1;
let pmin2 = pocSatLek2 * 60 + pocMinLek2;
let kmin1 = krajSatLek1 * 60 + krajMinLek1;
let kmin2 = krajSatLek2 * 60 + krajMinLek2;
let minuti
let sati

if (pocSatLek1 < pocSatLek2 && krajSatLek1 < krajSatLek2) {
    zajed = kmin1 - pmin2;
} 
else if (pocSatLek1 < pocSatLek2 && pocSatLek2 < krajSatLek1 && krajSatLek1 < krajSatLek2) {
    zajed = kmin1 - pmin2;
} 
else if (pocSatLek2 < pocSatLek1 && krajSatLek2 < krajSatLek1) {
    zajed = kmin2 - pmin1;
} 
else if (pocSatLek2 < pocSatLek1 && krajSatLek1 > krajSatLek2 && pocSatLek1 < krajSatLek2) {
    zajed = kmin1 - pmin1;
} 
else if (pocSatLek1 > pocSatLek2 && krajSatLek1 < krajSatLek2){
    zajed = kmin1 - pmin1;
}
else if (pocSatLek1 < pocSatLek2 && krajSatLek2 < krajSatLek1) {
    zajed = kmin2 - pmin2;
} 
else if (pocSatLek2 < pocSatLek1 && krajSatLek2 > krajSatLek1) {
    zajed = kmin1 - pmin1;
} 

else if (pocSatLek1 == pocSatLek2){
    if (krajSatLek1 < krajSatLek2){
    zajed = kmin1 - pmin1;
    }
    else if (krajSatLek1 > krajSatLek2){
        zajed = kmin2 - pmin1;
    }
    else if (krajSatLek2 == krajSatLek1){
        if (krajMinLek1 > krajMinLek2){
            zajed = kmin1 - pmin1;
        }
        else {
            zajed = kmin1 - pmin1;
        }
    }
}
else if (krajSatLek1 == krajSatLek2){
    if(kmin1 >= kmin2 && pmin1 > pmin2){
        zajed = kmin1 - pmin2;
    }
    else if (kmin2 >= kmin1 && pmin2 > pmin1){
        zajed = kmin2 - pmin2;
    }
    else if (kmin1 >= kmin2 && pmin2 > pmin1){
        zajed = kmin1 - pmin1;
    }
    else{
        zajed = kmin2 - pmin1;
    }
}
else {
    sati = 0;
    minuti = 0;
}


if (pocMinLek1 < 10){
    pocMinLek1 = "0" + pocMinLek1;
}
if (pocMinLek2 < 10){
    pocMinLek2 = "0" + pocMinLek2;
}
if (krajMinLek1 < 10){
    krajMinLek1 = "0" + krajMinLek1;
}
if (krajMinLek2 < 10){
    krajMinLek2 = "0" + krajMinLek2;
}


document.body.innerHTML += `<p style= "color:red;"> Početak radnog vremena prvog lekara je ${pocSatLek1}:${pocMinLek1}. </p>`;
document.body.innerHTML += `<p style= "color:red;"> Kraj radnog vremena prvog lekara je ${krajSatLek1}:${krajMinLek1}. </p>`;
document.body.innerHTML += `<p style= "color:blue;"> Početak radnog vremena drugog lekara je ${pocSatLek2}:${pocMinLek2}. </p>`;
document.body.innerHTML += `<p style= "color:blue;"> Kraj radnog vremena drugog lekara je ${krajSatLek2}:${krajMinLek2}. </p>`;
document.body.innerHTML += `<p style= "color:yellow;"> Vreme koje su lekari proveli zajedno na poslu je ${Math.floor(zajed / 60) }h i ${zajed % 60}min </p>`;
