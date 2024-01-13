var weather = function(temprature){
    console.log("the temprature outside is", temprature);
    if(temprature <= 30){
        console.log("the temprature too cold")
    } else if(temprature <= 50){
        console.log("it's pleasant outside")
    } else {
        console.log("it's getting hot outside")
    }
}
weather(25);
weather(35);
weather(70);