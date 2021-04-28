/*Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.*/

let k = 27;
let i = 1;
let brDelioca = 0;
while(i <= k){
    if ((k % i == 0) && (i % 3 == 0) && (i % 2 != 0)){
        brDelioca++;
    }
    i++;
}
console.log (brDelioca);