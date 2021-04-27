/*Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.*/

let rp = 9;
let rk = 20;
let vp = 10;
let vk = 18;
let datum = new Date ();
let dan = datum.getDay ();
let time = datum.getHours();
if (dan == 0){
    console.log("Vikend je");
    if(time < vp){
        console.log("Zatvoreno je");
    }
    else if(time >= vk){
        console.log("Zatvoreno je");

    }
    else{
        console.log("Otvoreno je");
    }
}
else if(dan == 6){
    console.log("Vikend je");
    if(time < vp){
        console.log("Zatvoreno je");
    }
    else if(time >= vk){
        console.log("Zatvoreno je");

    }
    else{
        console.log("Otvoreno je");
    }
}
else{
    console.log("Radni dan je");
    if(time < rp){
        console.log("Zatvoreno je");
    }
    else if(time >= rk){
        console.log("Zatvoreno je");

    }
    else{
        console.log("Otvoreno je");
    }
}


/*Ministarstvo zdravlja jedne zemlje je povodom pandemije virusa donelo sledeću odredbu:
"Ukoliko je procenat pozitivno testiranih stanovnika u odnosu na ukupno testirane stanovnike u jednom danu veći od 30%, i ako je pored toga i procenat pozitivno testiranih stanovnika veći od 10% ukupnog broja stanovnika te zemlje, automatski se uvodi vanredno stanje."
Za proizvoljno unete vrednosti: ukupan broj stanovnika zemlje, ukupan broj testiranih u jednom danu i ukupan broj pozitivno testiranih u tom danu, na ekranu crvenom bojom ispisati VANREDNO STANJE, ukoliko treba automatski uvesti vanredno stanje prema odredbi koju je ministarstvo donelo (u suprotnom ne ispisivati ništa).
*/

let stanovnici = 100000;
let testirani = 60000;
let pozitivni = 30000;

let procenatPT = ((pozitivni * 100) / testirani);
let procenatPS = ((pozitivni * 100) / stanovnici);

if (procenatPT > 30){
    if(procenatPS > 10){
        document.body.innerHTML =`<p style = "color: red;"> VANREDNO STANJE </p>`
    }
}
else{
    console.log("Nema vanrednog stanja");
}
