/*Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. 
U realizaciji ovog zadatka koristiti for petlju.*/

let div = `<div>`
let brE = 64;
for (i = 1; i <=64; i++){
    if(((i <= 8) && (i % 2 == 0)) || (i >= 17 && i <= 24 && i % 2 == 0) || (i >= 33 && i <= 40 && i % 2 == 0)  || (i >= 49 && i <= 56 && i % 2 == 0)) {
        div += `<span style="color: white; background-color: black;"> ${i} </span>`;
    }
    else if ((i >= 9 && i <= 16 && i % 2 !=0) || (i >= 25 && i <= 32 && i % 2 !=0) || (i >= 41 && i <= 48 && i % 2 !=0) || (i >= 57 && i <= 64 && i % 2 !=0)) {
        div += `<span style="color: white; background-color: black;"> ${i} </span>`;
    }
    else{
        div += `<span> ${i} </span>`
    }
    if (i % 8 == 0){
        div += 
        `
        <br>
        `
    }
}

div += `</div>`
document.body.innerHTML += div;