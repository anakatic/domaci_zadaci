
/*1.Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2  površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve vi n određujete sami. 
Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. 
Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena. */
let v = 90;
let n = 36;
let min = 3;
let maks = (90 / min);

console.log (maks);
if (n <= maks){
    console.log("DA")
    document.body.innerHTML = `<p> <font color="green"> DA </font> <p>`;
}
else if (n > maks){
    document.body.innerHTML +=`<p style = "color: red;"> NE  </p>`;
    let visak = (n - maks);
    document.body.innerHTML += `<span style = "color: red;"> ${visak} </span> ljudi treba da napusti lokal`
}




/*2.Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.*/

let datum = new Date ();
let god = datum.getFullYear ();
let rodj = 1997;
let punoletno = (datum - 18);
if (rodj <= punoletno){
    console.log("Osoba je punoletna")
}