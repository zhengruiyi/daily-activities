/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function mapping (s){
  if(s === "1"){
    return 1;
  }
  else if(s === "2"){
    return 2;
  }
  else if(s === "3"){
    return 3;
  }
  else if(s === "3"){
    return 3;
  }
  else if(s === "4"){
    return 4;
  }
  else if(s === "5"){
    return 5;
  }
  else if(s === "6"){
    return 6;
  }
  else if(s === "7"){
    return 7;
  }
  else if(s === "8"){
    return 8;
  }
  else if(s === "9"){
    return 9;
  }
  else if(s === "10"){
    return 10;
  }
  else if(s === "K" || s === "Q" || s === "J"){
    return 10;
  }
  else if(s === "A"){
    return 11;
  }
}
function handValue (hand) {
  var total = 0;
  for(var i = 0; i < hand.length; i++){
    total += mapping(hand[i]);
  }
  for(var j = 0; j < hand.length && total > 21; j++){
    if(hand[j] === "A")
      total -= 10;
  }
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
