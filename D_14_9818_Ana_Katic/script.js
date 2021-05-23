let dan1 = {
    datum: "2021/05/18",
    kisa: true, 
    sunce: false,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18, 13, 11],
    brIzmerenih: function(){
        let br = 0;
        this.temperature.forEach(e => {
            br++;
        });
        return br;
    },
    ukupnaTemp: function(){
        let ukT = 0;
        this.temperature.forEach(e => {
            ukT += e
        });
        return ukT;
    }
}

let dan2 = {
    datum: "2021/05/19",
    kisa: false, 
    sunce: true,
    oblacno: false,
    temperature: [10, 14, 16, 20, 19, 15, 13, 9],
    brIzmerenih: function(){
        let br = 0;
        this.temperature.forEach(e => {
            br++;
        });
        return br;
    },
    ukupnaTemp: function(){
        let ukT = 0;
        this.temperature.forEach(e => {
            ukT += e
        });
        return ukT;
    }
}

let dan3 = {
    datum: "2021/05/20",
    kisa: false, 
    sunce: true,
    oblacno: true,
    temperature: [12, 15, 15, 19, 20, 17, 14, 15],
    brIzmerenih: function(){
        let br = 0;
        this.temperature.forEach(e => {
            br++;
        });
        return br;
    },
    ukupnaTemp: function(){
        let ukT = 0;
        this.temperature.forEach(e => {
            ukT += e
        });
        return ukT; 
    }
}

let dani = [dan1, dan2, dan3];

let ispisDatuma = () => {
    let maks = dani[0].temperature.length;
    let poslednjiDan = dani[0].datum;
        dani.forEach(e => {
            if(e.temperature.length >= maks){
                maks = e.temperature.length;
            }         
        });   
    
    dani.forEach(dan=> {
        if(maks == dan.temperature.length && dan.datum > poslednjiDan){
            poslednjiDan = dan.datum;
        }
        
    });
    return poslednjiDan;
};
console.log (ispisDatuma(dani));

//Napraviti arrow funksiju koja prebrojava i u konzoli ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let KSO = () => {
    let brKisa = 0;
    let brSunce = 0;
    let brOblaci = 0;
    dani.forEach(dan => {
        if(dan.kisa){
            brKisa++;
        }
        if(dan.sunce){
            brSunce++;
        }
        if(dan.oblacno){
            brOblaci++;
        }
    });
    console.log(`Broj kisnih dana je ${brKisa}, suncanih dana je ${brSunce}, a oblacnih ${brOblaci}.`);
};

KSO(dani);

//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli.

let natprosečna = () => {
    let ukupnaT = 0;
    let brojTemp = 0;
    let brDana = 0;
    dani.forEach(e => {
        ukupnaT += e.ukupnaTemp();
        brojTemp += e.brIzmerenih();
        
    });
  let prosek = ukupnaT / brojTemp;
  for(let i = 0; i < dani.length; i++){
      let temp = dani[i].temperature;
      for(let i = 0; i < temp.length; i++){
          if(temp[i] > prosek){
              brDana++;
              break;
          }
      };
  } 
  return brDana;
};

console.log(natprosečna(dani));