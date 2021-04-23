console.log("Domaci zadatak");

/*1. Zadatak
Izvršiti konverziju temperature iz Farenhajta u Kelvine i obratno, ukoliko su date sledeće dve formule:

Celzijus = (Farenhajt - 32) * 5/9
Kelvin = Celzijus + 273.15

Temperaturu u Farenhajtima i Kelvinima zadati samostalno.*/

let farenhajt = 50;
let FuK = (farenhajt-32) * 5 / 9 + 273.15;
console.log("50 farenhajta konvertovano u kelvine je",FuK);
let kelvin = 560;
let celzijus = kelvin - 273;
let KuF = (celzijus / (5/9)) + 32;
console.log("560 kelvina konvertovano u farenhajte iznosi",KuF);







/*2. Zadatak
Knjiga ima n poglavlja (broj n unosite sami). 
Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana.
Na osnovu dodeljenih vrednosti, u konzoli ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.*/

let n = 40;
let a = 12;
let ostalaPoglavlja = n - a - (a + 2);
console.log ("Broj poglavlja koji je ostao citaocu da procita je",ostalaPoglavlja);


/*3. Zadatak
Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno.
Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.*/

let p = 1500;
let m = 2000;
let k = 1100;
let cenaDzempera = (p + m - k)/2;
let perinKusur = p - cenaDzempera;
console.log ("Perin kusur iznosi",perinKusur);
let mikinKusur = m - cenaDzempera;
console.log("Mikin kusur iznosi",mikinKusur);