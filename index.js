
// calender months and days !!!
// 1st month 1st date adn so on

for( var months=1; months<=12; months++){
    var days_value=31;
    if(months==2){
        days_value=28;
    }
    if(months==4 || months==6 || months==9 || months==11){
        days_value = 30;
    }
    for( var days=1; days<=days_value; days++){
        console.log(months,"Month and ",days,"day")
    }

    console.log("---month completed---\n")
}
console.log("---year completed----\n\t");