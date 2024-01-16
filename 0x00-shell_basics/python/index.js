var sellStock = function(stockPrice, sellPrice){
    //write your code here.
    console.log("the price is",sellPrice);
    var sell = {
        sellPrice: stockPrice
    }
   
    if (sellPrice <= 200){
        console.log("not fair price");
    } else if(sellPrice <= 400){
        console.log("not a fair price");
    } else if (sellPrice >= 600){
        console.log("sell")
    } else if(sellPrice >= 800){
        console.log(sell);
    } else if(sellPrice >= 1000){
        console.log("sell");
    }
  }
  sellStock(150, 200);
  sellStock(350, 400);
  sellStock(500,600);
  sellStock(700, 800);
  sellStock(950, 1000);