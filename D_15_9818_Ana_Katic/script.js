let knjiga1 = {
    naziv: "Prva knjiga",
    autor: "Aleksandra Hrnjacki",
    putanja: "1.jpg",
    procitano: true
}
let knjiga2 = {
    naziv: "Druga knjiga",
    autor: "Jovana Marinkov",
    putanja: "2.jpg",
    procitano: true
}
let knjiga3 = {
    naziv: "Treća knjiga",
    autor: "Dragana Drakulic",
    putanja: "3.jpg",
    procitano: false
}

let knjige = [knjiga1, knjiga2, knjiga3];

let body = document.querySelector("body");
let tabela = document.createElement("table");

knjige.forEach((knjiga, i) => {
    let red = document.createElement("tr");
    tabela.appendChild(red);
    for(let j = 0; j < 2; j++){
        if(j == 0){
            let celija = document.createElement("td");
            let slika = document.createElement("img");
            slika.src = knjiga.putanja;
            celija.appendChild(slika);
            red.appendChild(celija);
            celija.style.border = "1px solid black";
            celija.style.textAlign = "center";
        }
        else{
            let celija = document.createElement("td");
            let paragraf = document.createElement("p");
            let br = document.createElement("br");
            paragraf.textContent = `${knjiga.naziv}, ${knjiga.autor}`;
            celija.appendChild(paragraf);
            red.appendChild(celija);
            celija.style.border = "1px solid black";
            celija.style.textAlign = "center";

            if(knjiga.procitano == true){
                paragraf.style.color = "blue";
            }
            else{
                paragraf.style.color = "grey";
            }
        }
    }
    if(i % 2 == 0){
        red.style.backgroundColor = "yellow";
    }
    else{
        red.style.backgroundColor = "lightgreen";
    }
}); 

body.appendChild(tabela);