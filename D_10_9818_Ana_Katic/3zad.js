//Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
let br1 = 697;
let zbir = 0;
while (br1) {
    zbir += br1 % 10;
    br1 = Math.floor(br1 / 10);
   }
document.body.innerHTML += `<p> Zbir cifara unetog celog broja je ${zbir} </p>`



//Odrediti proizvod brojeva od n do m koji su deljivi sa 7 a nisu sa 3, a potom od njega oduzeti zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7:
//Koristeći while petlju
let n = 5;
let m = 15;
zbir = 0;
let proizvod = 1;
while (n <= m){
    if(n % 7 == 0 && n % 3 !=0){
        proizvod *= n;
    }
    n++
}

n = 5;
while (n <= m){
    if(n % 3 == 0 && n % 7 !=0){
        zbir += n;
    }
    n++
}
let rezultat = proizvod - zbir;
console.log(rezultat);


//Koristeći for petlju
n = 5;
m = 15;
zbir = 0;
proizvod = 1;
for (i = n; i <= m; i++){
    if(i % 7 == 0 && i % 3 !=0){
        proizvod *= i;
    }
}

for(i = n; i <= m; i++){
    if(i % 3 == 0 && i % 7 !=0){
        zbir += i;
    }
}

let rezultat1 = proizvod - zbir;
console.log(rezultat1);

//Odrediti sumu kubova neparnih brojeva od n do m:
//Koristeći while petlju
suma = 0;
n = 15;
m = 26;
while ( n <= m){
    if (n % 2 != 0){
        suma += n**3;
    }
    n++;
}
console.log(suma);



//Koristeći for petlju
suma = 0;
n = 15;
m = 26;
for ( i = n; i <= m; i++){
    if ( i % 2 !=0){
        suma += i**3;
    }
}
console.log(suma);