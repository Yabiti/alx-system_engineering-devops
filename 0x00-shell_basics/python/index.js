var weather = function(temprature){
  console.log("the weather outside is ", temprature , " degree faranheight!");

  if(temprature >= 65){
    console.log("the weather is hot today");
  } else if(temprature >= 50){
    console.log("the weather is pleasant today");
  } else {
    console.log("the weather is cold outside");
  }
} 

weather(60);
weather(50);
weather(10);