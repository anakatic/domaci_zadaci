export class Pacijent{
    constructor(i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    set ime(x){
        this._ime = x;
    }
    set tezina(x){
        if(x > 0 && x < 550){
            this._tezina = x;
        }
        else{
            this._tezina = 0;
        }
    }
    set visina(x){
        if(x > 0 && x < 250){
            this._visina = x;        
        }
        else{
            this._visina = 0;
        }
    }         
        
    get ime(){
        return this._ime;
    }
    get visina(){
        return this._visina;
    }
    get tezina(){
        return this._tezina;
    }
    stampaj(){
        console.log(`Ime pacijenta: ${this.ime}, visina pacijenta: ${this.visina}m, tezina pacijenta: ${this.tezina}`)
    }
    Bmi(){
        let bmi = this.tezina / ((this.visina/100)**2);
        return bmi;
    }
    kritican(){
        let bmi = this.Bmi();
        if(bmi < 15 || bmi > 40){
            return true;
        }
        else{
            return false;
        }
    } 
}




