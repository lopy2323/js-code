let CurrentDate = new Date();
let DayOfWeek = CurrentDate.getDay();
let day;
if (DayOfWeek == 6 ){
    day = "zaterdag";
}else if (DayOfWeek == 7 ){
    day = "zondag";
}
if(day == "zondag" || day == "zaterdag" ){
    console.log("ik moet niet naar school");
}else{
    console.log("ik moet naar school");
};
