var weather = function(temprature){
    console.log("the temprature outside is", temprature);

    if(temprature <=20){
        console.log("the temprature is pleasnat today");
    } else if(temprature <=30){
        console.log("the temparature is hot today");
    } else {
        console.log("very hard weather");
    }
}
weather(10);
weather(35);
weather(40);
weather(55);