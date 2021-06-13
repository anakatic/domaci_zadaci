let nazivProizvoda = document.getElementById("inputTekst");
let prvaCena = document.getElementById("inputNumber1");
let drugaCena = document.getElementById("inputNumber2");
let btn = document.querySelector("button");
let divIspis = document.querySelector("div");


function getItems(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function() {
            if(this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if(this.readyState == 4) {
                reject("could not fetch data");
            }
        });
        request.open('GET', resource);
        request.send();
    }); 
}

let click = e => {
    e.preventDefault();
    let naStanju = [];
    let nizProzivoda = [];
    let proizvodiUTojCeni = [];  
    if((nazivProizvoda.value.length == 0) || (prvaCena.value.length == 0) || (drugaCena.value.length == 0)){
        alert("Popunite sve polja");
    }
    else{
        getItems("json/stock.json")
        .then(data => {
            data.forEach(item => {
                if(item.stock > 0){
                    naStanju.push(item);
                }
            });
            let unetNazivProizvoda = nazivProizvoda.value;
            data.forEach(item => {
                if(item.item.includes(unetNazivProizvoda)){
                    nizProzivoda.push(item.id);
                }
            });
             return getItems("json/prices.json");
        })
        .then (data => {
        
            data.forEach(item => {
                if(nizProzivoda.includes(item.id)){
                    if(prvaCena.value > item.price && drugaCena.value < item.price){
                        proizvodiUTojCeni.push(item);
                    }
                    else if(prvaCena.value < item.price && drugaCena.value > item.price){
                        proizvodiUTojCeni.push(item);
                    } 
                }        
            });
            if(proizvodiUTojCeni.length == 0){
                let p = document.createElement("p")
                p.textContent = "Nema odgovarajucih proizvoda";
                divIspis.appendChild(p);
            }
          
            let tabela = document.createElement("table");
              
            proizvodiUTojCeni.forEach(pr => {
                naStanju.forEach(svi => {
                    if(svi.id == pr.id){
                     let tr = document.createElement("tr");
                     let td = document.createElement("td");
                     td.textContent = "Naziv proizvoda: " + pr.item;
                     let td2 = document.createElement("td");
                     td2.textContent = "Količina na stanju: " + svi.stock;
                     let td3 = document.createElement("td");
                     td3.textContent = "Cena: " + pr.price + "0";
                     tr.appendChild(td);
                     tr.appendChild(td2);
                     tr.appendChild(td3);
                     tabela.appendChild(tr);
                    }
                });                      
            });           
            divIspis.appendChild(tabela)
        }).catch(err => {
            console.log("Rejected", "Ne mogu da dohvatim podatke");
        });
    }    
}

btn.addEventListener("click", click);