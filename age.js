let jaar = 2008
let maand = 6
let dag = 18

function leeftijd(j,m,d){
    let now = new Date();
    let birth = new Date(j,m,d); 
    let miliseconds = now-birth;
    return miliseconds
}

let hoeoud = leeftijd(jaar,maand,dag)
let jaaren = hoeoud / 31557600000 
console.log("welk jaar ben je geboren",jaar)
console.log("welke maand ben je geboren",maand)
console.log("welke dag ben je geboren",dag)
console.log("je bent jaren",jaaren,"oud")
