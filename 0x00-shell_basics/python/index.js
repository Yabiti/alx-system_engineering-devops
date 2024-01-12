var rangesum = function(number){
    var sum = 0;
   var i = number;
   if(number < 0) {
    while(i < 0){
        sum = sum + 1;
        i = i + 1;
    }
    
   }
   else {
    while(i > 0){
        sum = sum + 1;
        i = i - 0;
    }
   }
   return sum;
}