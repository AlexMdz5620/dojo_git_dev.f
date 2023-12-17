let gifts = [2, 1, 3, 5, 3, 2];

function findFirstRepeated(gifts) {
  // Code here
  let giftRep = [];
  for(let i = 0; i < gifts.length; i++){
    giftRep[i]=gifts[i];
    console.log(giftRep);
    if(giftRep[i] === gifts[i]){
      console.log(giftRep);
    } else {
      console.log(-1);
    }
  }
}

findFirstRepeated(gifts);