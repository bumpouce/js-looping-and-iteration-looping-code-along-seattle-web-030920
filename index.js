// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);


function writeCards(giftGivers, occasion) {
    for (let i = 0; i < giftGivers.length; i++) {
        giftGivers[i] = (`Thank you, ${giftGivers[i]}, for the wonderful ${occasion} gift!`);
    }
    return giftGivers;
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");



function countDown (timer) {
    while (timer >= 0) {
        console.log(timer);
        timer --;
    }
}