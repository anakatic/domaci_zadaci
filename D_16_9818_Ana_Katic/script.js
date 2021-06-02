/*Ispisati korisnike čije ime sadrži reč „Clementin“.*/

let request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200){
        let data = JSON.parse(request.responseText);
        data.forEach(user => {
            if(user.name.includes("Clementin")){
                console.log(user.name);     
            }
        });
    }
    else if(request.readyState === 4) {
        console.log("Server nije u stanju da obradi zahtev");
    }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();



/*Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. */

let request1 = new XMLHttpRequest();
request1.addEventListener("readystatechange", () => {
    if(request1.readyState === 4 && request1.status === 200){
        let data = JSON.parse(request1.responseText);
        data.forEach(user => {
            if(user.company.name.includes("Group") || (user.company.name.includes("LLC"))){
                console.log(user.name);     
            }
        });
    }
    else if(request1.readyState === 4) {
        console.log("Server nije u stanju da obradi zahtev");
    }
});

request1.open("GET", "https://jsonplaceholder.typicode.com/users");
request1.send();

/*Ispisati sve različite gradove u kojima rade ovi korisnici.*/

let request2 = new XMLHttpRequest();
request2.addEventListener("readystatechange", () => {
    if(request2.readyState === 4 && request2.status === 200){
        let data = JSON.parse(request2.responseText);
        data.forEach(user => {
            console.log(user.address.city);     
        });
    }
    else if(request2.readyState === 4) {
        console.log("Server nije u stanju da obradi zahtev");
    }
});

request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();

/*Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.*/

let brojKorisnika = 0;
let request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", () => {
    if(request3.readyState === 4 && request3.status === 200){
        let data = JSON.parse(request3.responseText);
        data.forEach(user => {
            if(user.address.geo.lat < 0 && user.address.geo.lng < 0){
                brojKorisnika++;
            }  
        });
        console.log(brojKorisnika);
    }
    else if(request3.readyState === 4) {
        console.log("Server nije u stanju da obradi zahtev");
    }
});

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();
