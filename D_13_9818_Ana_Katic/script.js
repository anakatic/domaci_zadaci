let dan = {
    datum: "2021/05/18",
    kisa: true, 
    sunce: true,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18, 13, 11, 21],
 // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
 neuobicajen: function(){
    for(let i = 0; i < this.temperature.length; i++){
        if((this.kisa && this.temperature[i] < -5) || (this.oblacno && this.temperature[i] > 25) || (this.kisa && this.oblacno && this.sunce)){
            return true;
        }
    }
    return false;
},
/*Napisati metod koji na ekranu ispisuje neuređenu listu, čija je sadržina (čiji su elementi/buleti) //vrednosti temperature iz datog niza temperatura. 
Maksimalnu (ili maksimalne ukoliko ih je više) vrednost u neurešenoj listi obojiti crvenom bojom. 
Minimalnu (ili minimalne vrednosti ukoliko ih je više) obojiti plavom bojom. */
lista: function(){
    let lista = `<ul>`
    let maks = this.temperature[0];
    let min = this.temperature[0];
    this.temperature.forEach(e => {
        if(e > maks){
            maks = e;
        }     
        if(e < min){
            min = e;
        }   
    });
    this.temperature.forEach(e => {
        if(maks == e){
            lista += `<li style="color:red;">${e}</li>`;
        }
        else if(min == e){
            lista += `<li style="color:blue;">${e}</li>`;
        }
        else{
            lista += `<li>${e}</li>`;
        }
    });
    lista += `</ul>`;
    document.body.innerHTML += lista;
}
}

/* 1. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.*/
console.log(dan.neuobicajen());

/* 2. Napisati metod koji na ekranu ispisuje neuređenu listu, čija je sadržina (čiji su elementi/buleti) //vrednosti temperature iz datog niza temperatura. 
Maksimalnu (ili maksimalne ukoliko ih je više) vrednost u neurešenoj listi obojiti crvenom bojom. 
Minimalnu (ili minimalne vrednosti ukoliko ih je više) obojiti plavom bojom. */
dan.lista();