function count(getal1,getal2){
    let opgetteld = getal1 + getal2;
    console.log(opgetteld)
}   
    function multiply(getal1,getal2){
        let mtopgeteld = getal1 * getal2
        console.log(getal1,"*",getal2,"=",mtopgeteld)
    }

   function rolldice(){
    var aantalogen = Math.ceil(Math.random()*6);
    return aantalogen
   }
   let dobbelsteen = rolldice();

   console.log(dobbelsteen)

   function biggernummer(arg1,arg2){
     if (arg1 > arg2){
        return arg1
        }else if(arg2>arg1){
         return arg2
        }  
        return 0
    
   }
   let nummer = biggernummer(8,9)
   console.log(nummer)
   

