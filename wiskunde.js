function berekenInhoud(nummer1,nummer2,nummer3){
let uitkomst = nummer1 * nummer2 * nummer3;
return uitkomst;
};
let kubusInhoud = berekenInhoud(10, 5, 10);
console.log("kubus",kubusInhoud);
function berekencylinder(nummer1,nummer2){
   let uitkomst = nummer1**2 * Math.PI * nummer2;
   return uitkomst;
};
let cylinderuitkomst = berekencylinder(10,10);
console.log("cylinder inhoud",cylinderuitkomst);
function stellingvanpytagras(nummer1,nummer2){
   let hoogte = nummer2** 2;
   let breedte = nummer1** 2;
   let langerauw = hoogte + breedte;
   let uitkost = Math.sqrt(langerauw);
   return uitkost;
};
let antword = stellingvanpytagras(4,3);
console.log("driehoek langezeide",antword);
function gemiddelde(nummer1,nummer2,nummer3,nummer4,nummer5,nummer6,nummer7){
  let total = nummer1 + nummer2 + nummer3 + nummer4 + nummer5 + nummer6 + nummer7;
  let uitkomst = total/7;
  return uitkomst;
};
let antwordgemiddelde = gemiddelde(7,3,4,2,4,5,6);
console.log("het gemiddelde nummer is",antwordgemiddelde)