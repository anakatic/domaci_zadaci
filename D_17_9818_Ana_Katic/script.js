import {Pacijent} from "./pacijent.js";

let pacijent1 = new Pacijent("Milos", 175, 79);
let pacijent2 = new Pacijent("Ivan", 190, 110);
let pacijent3 = new Pacijent("Branislav", 189, 100);

let pacijenti = [pacijent1, pacijent2, pacijent3];

//Ispisati podatke o pacijentu sa najmanjom težinom.

let najmanjaTezina = pacijenti[0].tezina;
for(let i = 0; i < pacijenti.length; i++){
    if(pacijenti[i].tezina < najmanjaTezina){
        najmanjaTezina = pacijenti[i].tezina;
    }
}
pacijenti.forEach(pacijent => {
    if(pacijent.tezina == najmanjaTezina){
        console.log(pacijent);
    }
});

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let maxBmi = pacijenti[0].Bmi();
for(let i = 0; i < pacijenti.length; i++){
    if(pacijenti[i].Bmi() > maxBmi){
        maxBmi = pacijenti[i].Bmi();
    }
}
pacijenti.forEach(pacijent => {
    if(pacijent.Bmi() == maxBmi){
        console.log(pacijent);
    }
})

//Ispisati sve pacijente čije ime sadrži slovo A.
pacijenti.forEach(pacijent => {
    if(pacijent.ime.includes("A")|| (pacijent.ime.includes("a"))){
        console.log(pacijent);
    }
})

//Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = niz => {
    let ukupnaVisina = 0;
    niz.forEach(e => {
        ukupnaVisina += e.visina;
    })

    return ukupnaVisina / niz.length;
}

console.log("Srednja visina pacijenata je:" +srednjaVisina(pacijenti));