
/*1.Zadatak
Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli.*/
let suma1 = 0;
function suma(n, m){
    for (i = n; i <= m; i++){
        suma1 += (i **3);
    }
   return suma1;
}
console.log(suma(5, 9));


/*2.Zadatak
Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli.*/
let datum = new Date();
let god = datum.getFullYear();
function godine(godRodjenja){
    let brGodina = god - godRodjenja;
    return brGodina;
}
console.log(godine(1997));

/*3.Zadatak
Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.*/

let brBrojeva = 0;
function deljiv(n, m, k){
    for (i = n; i <= m; i++){
        if(i % k == 0){
            brBrojeva++;
        }
    }
   document.body.innerHTML += `Broj brojeva koji su deljivi od ${n} do ${m} sa brojem ${k} je ${brBrojeva}.`;
}
deljiv(1, 24, 3);

