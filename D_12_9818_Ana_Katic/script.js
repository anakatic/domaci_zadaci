/*
1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća indeks minimalnog elementa ovog niza. Ukoliko ima više jednakih minimalnih elemenata, vratiti indeks bilo kog od minimalnih elemenata.
*/
function indeksMinEl(niz){
    let min = niz[0];
    let indeks = 0;
    niz.forEach((e, i) => {
        if (e < min){
            min = e;
            indeks = i;

        }
    });
    return indeks;
}
let a = [12, 9, 8, 11, 25, 2];
console.log("Indeks minimalnog elementa u nizu je: " + indeksMinEl(a));


/* 
2. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.
*/
function sumaEl(niz){
    let suma = 0;
    niz.forEach(e => {
        if(e % 2 == 0){
            suma += e;
        }
    });
    return suma;
}
console.log("Suma elemenata niza sa parnim indeksom je "+ sumaEl(a));

/*
3. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli. 
*/
a = [4, -10, 9, 8, -9, -3];
function znak(niz){
    niz.forEach((e, i) => {
        if(e % 2 !=0 && i % 2 == 0){
           e *= (-1); 
                
        }   
        console.log(`element: ${e}`);
    });
    
    
}
znak(a);