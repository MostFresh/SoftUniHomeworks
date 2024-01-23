function Theatro(DayType, age){
    let price = "5leva";
    if (DayType === "Weekday"){
        if (age<0){
            price = "Error!"
        }else if(age <=18){
            price = "12$";
        }else if(age <=64){
            price = "18$";
        }else if( age<=122){
            price = "12$";
        }else{
            price = "Error!";
        }
    } else if(DayType === "Weekend"){
        if (age<0){
            price = "Error!"
        }else if(age <=18){
            price = "15$";
        }else if(age <=64){
            price = "20$";
        }else if( age<=122){
            price = "15$";
        }else{
            price = "Error!";
        }
    } else if(DayType === "Holiday"){
        if (age<0){
            price = "Error!"
        }else if(age <=18){
            price = "5$";
        }else if(age <=64){
            price = "12$";
        }else if( age<=122){
            price = "10$";
        }else{
            price = "Error!";
        }
    } else;
    console.log(price)
}

Theatro('Holiday', 87 )