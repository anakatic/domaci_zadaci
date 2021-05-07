// 1.zadatak
//Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).
let dan = 3;
switch(dan) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
    console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    case 6:
        console.log("Subota");
        break;
    case 7:
        console.log("Nedelja");
        break;
}

//2.zadatak
//Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).
let ocena = 5;
switch(ocena){
    case 1:
        console.log("Nedovoljan");
        break;
    case 2:
        console.log("Dovoljan");
        break;
    case 3:
        console.log("Dobar");
        break;
    case 4:
        console.log("Vrlo dobar");
        break;
    case 5:
        console.log("Odlican");
        break;
}

//3.zadatak
//Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.
let broj = 4;
switch(broj){
    case 2:
        console.log ("Dvojka");
       break;
       case 4:
        console.log ("Četvorka");
       break;
       case 6:
        console.log ("Šestica");
       break;
       case 8:
        console.log ("Osmica");
       break;
      default:
          console.log("Unos je pogrešan");
}

/* 4.zadatak
Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.*/
br1 = 5;
let br2 = 2;
m = "m";
let kalkulator = 1;
let kalkulator1 = 0;
switch(m){
    case "m":
        kalkulator = br1 * br2;
        console.log(kalkulator);
        break;
    case "d":
        if( br2 == 0){
            console.log("Deljenje nije moguce.")
        }
        else{
            kalkulator = br1 / br2;
            console.log(kalkulator);
        }
        break;
    case "s":
        kalkulator1 = br1 + br2;
        console.log(kalkulator1);
        break;
    case "o":
        kalkulator1 = br1 - br2;
        console.log(kalkulator1);
        break;
}

/*5.zadatak
Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.*/
let datum = new Date();
dan = datum.getDay ();
switch(dan){
    case 1:
        console.log("Ostalo je još 5 dana do vikenda");
        break;
    case 2:
        console.log("Ostalo je jos 4 dana do vikenda");
        break;
    case 3:
        console.log("Ostalo je još 3 dana do vikenda");
        break;
    case 4:
        console.log("Ostalo je još 2 dana do vieknda");
        break;
    case 5:
        console.log("Ostao je još 1 dan do vikenda");
        break;
    default:
        console.log("Vikend je");
}
//6.zadatak
//Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.
let mesec = datum.getMonth() + 1;
let godina = datum.getFullYear();
switch(mesec){
    case 1:
        console.log("Januar");
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Maj");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Avgust");
        break;
    case 9:
        console.log("Septembar");
        break;
    case 10:
        console.log("Oktobar");
        break;
    case 11:
        console.log("Novembar");
        break;
    case 12:
        console.log("Decembar");
        break;
}

/*7.zadatak
Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.*/
switch(mesec){
    case 1:
        console.log("31 dan");
        break;
    case 2:
        if((godina % 4 == 0 && godina % 100 !=0) || (godina % 400 == 0)){
            console.log("Mesec februar ima 29 dana.");
        }
        else{
            console.log("Mesec februar ima 28 dana.");
        }
        break;
    case 3:
        console.log("31 dan");
        break;
    case 4:
        console.log("30 dana");
        break;
    case 5:
        console.log("31 dan");
        break;
    case 6:
        console.log("30 dana");
        break;
    case 7:
        console.log("31 dan");
        break;
    case 8:
        console.log("31 dan");
        break;
    case 9:
        console.log("30 dana");
        break;
    case 10:
        console.log("31 dan");
        break;
    case 11:
        console.log("30 dana");
        break;
    case 12:
        console.log("31 dan");
        break;
}


/*8.zadatak
Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.*/
let color = "green";
switch(color){
    case "red":
        document.body.innerHTML += `<p style ="color:red;">Tekst paragrafa</p>`;
        break;
    case "green":
        document.body.innerHTML += `<p style ="color:green;">Tekst paragrafa</p>`;
        break;
    case "blue":
        document.body.innerHTML += `<p style ="color:blue;">Tekst paragrafa</p>`;
        break;
    default:
        document.body.innerHTML += `<p style ="color:yellow;">Tekst paragrafa</p>`;
        break;

}