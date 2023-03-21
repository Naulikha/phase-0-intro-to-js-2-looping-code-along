// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
  }
  const gifts = ['teddy bear', 'drone', 'doll'];

  function wrapGifts(gifts){
    for( i=0; i<gifts.length; i++){
        console.log(`wrappped ${gifts[i]} and added a bowl`);
        //debugger;
    }
    return gifts;
  }
  wrapGifts(gifts);

  const cards = ['Charlie', 'Samip', 'Ali'];
  let event = 'birthday';

  function writeCards(cards, event){
   let cardsCopy = []
    for( let i=0; i<cards.length; i++){
        cardsCopy.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
        debugger; 
        //console.log(cardsCopy)
    }
    return cardsCopy;
  }
  
  writeCards(cards, event);

  function countDown(num){
   let i = num;
    while (i >= 0){
        console.log (i);
        i--;
    }
  }