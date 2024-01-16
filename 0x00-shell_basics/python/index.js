var weather = function(temprature){
    console.log("the temprature outside is", temprature , "degree farenheight!");

    if(temprature <=20){
        console.log("it's getting cold outside better wear a jacket!");
    } else if(temprature <=30) {
        console.log("the weather is pleasant outside!");
    } else if(temprature <=40) {
        console.log("it's hot outside!");
    } else {
        console.log("do not leave home!");
    }
}
weather(21)
weather(55)
weather(35)
weather(19)