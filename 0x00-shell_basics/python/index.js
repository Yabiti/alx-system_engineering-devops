var weather = function(temprature){
    console.log("the weather outside is", temprature);

    if(temprature >=20){
        console.log("the weather is pleasnat");
    }else if(tempratue >= 30 && temprature > 40) {
        console.log("better wear jacket");
    } else {
        console.log("the weather is cold");
    }
}

weather(20)
weather(30)
weather(40)