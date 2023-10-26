let but = document.querySelector(".button");
let date = document.querySelector(".date");
let day = document.querySelector(".day");


// date & day
but.addEventListener("click",inputMsg);
function inputMsg(){
    // date
    let newDate = parseInt(prompt("Enter the date (dd) = "));
    let newMonth =parseInt( prompt("Enter the month (mm) = "));
    let newYear = parseInt(prompt("Enter the year (yy) = "));
    if(newDate<10 && newMonth>9){
        date.textContent = "Date = " + "0" + newDate + "." + newMonth + "." + newYear;
    }
    if(newDate>9 && newMonth<10){
        date.textContent = "Date = " + newDate + "." + "0" + newMonth + "." + newYear;
    }
    if(newDate<10 && newMonth<10){
        date.textContent = "Date = " + "0" + newDate + "." + "0" + newMonth + "." + newYear;
    }
    

    // day
    let monthCode;  // month code
    if(newMonth == 1){monthCode=0;}
    else if(newMonth == 2){monthCode=3;}
    else if(newMonth == 3){monthCode=3;}
    else if(newMonth == 4){monthCode=6;}
    else if(newMonth == 5){monthCode=1;}
    else if(newMonth == 6){monthCode=4;}
    else if(newMonth == 7){monthCode=6;}
    else if(newMonth == 8){monthCode=2;}
    else if(newMonth == 9){monthCode=5;}
    else if(newMonth == 10){monthCode=0;}
    else if(newMonth == 11){monthCode=3;}
    else if(newMonth == 12){monthCode=5;}

    let centuryCode;    // century code
    let a = newYear%100;
    let century = newYear - a ;
    if(century%400 == 0){
        centuryCode = 6;
    }
    if((century-100)%400 == 0){
        centuryCode = 4;
    }
    if((century-200)%400 == 0){
        centuryCode = 2;
    }
    if((century-300)%400 == 0){
        centuryCode = 0;
    }

    // let sum = newDate + (newYear%100) + ((newYear%100)/4) + monthCode + centuryCode ; 
    let sum = newDate + a + parseInt(a/4) + monthCode + centuryCode ; 

    if(newYear%400 == 0 || newYear%4 == 0 && newYear%100 != 0){
        if(newMonth ==1 ){sum--;}
        else if(newMonth == 2 && newDate <= 28){sum--;}
    }

    
    // console.log(newDate);
    // console.log(newMonth);
    // console.log(newYear);
    // console.log(monthCode);
    // console.log(centuryCode);
    // console.log(century);
    // console.log(a);
    // console.log(a/4);
    // console.log(parseInt(a/4));
    // console.log(sum);

    
    // if(sum%7 == 0){
    //     day.textContent = "Day = " + "Sunday";
    // }
    // else if(sum%7 == 1){
    //     day.textContent = "Day = " + "Monday";
    // }
    // else if(sum%7 == 2){
    //     day.textContent = "Day = " + "Tuesday";
    // }
    // else if(sum%7 == 3){
    //     day.textContent = "Day = " + "Wednesday";
    // }
    // else if(sum%7 == 4){
    //     day.textContent = "Day = " + "Thrusday";
    // }
    // else if(sum%7 == 5){
    //     day.textContent = "Day = " + "Friday";
    // }
    // else if(sum%7 == 6){
    //     day.textContent = "Day = " + "Saturday";
    // }

let weekDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday" , "Saturday"] ;
let ans = weekDays[sum%7];
day.textContent = "Day = " + ans;
// console.log(ans);
}
