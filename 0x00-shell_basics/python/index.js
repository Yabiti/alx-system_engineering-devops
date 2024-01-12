arraysum([4 , 5 ,6 ,7])
arraysum([-6, 10 ,0 ,4])

var arraysum = function(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
}