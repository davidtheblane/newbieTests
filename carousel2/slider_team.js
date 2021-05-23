let span = document.getElementsByTagName('span');
let card = document.getElementsByClassName('cards__individual');
let card_page = Math.ceil(card.length/4);
let l = 0
let movePer = 25.34;
let maxMove = 203;

// // Mobile
// let mobile_view = window.matchMedia("(max-width: 768px)");
// if (mobile_view.matches) {
//   movePer = 50.36;
//   maxMove = 504;
// }

let right_move = () =>{
  l = l + movePer;
  if(card == 1) {l = 0}
  for(const i of card) {
    if(l > maxMove) {l = l - movePer;}
    i.style.left = '-' + l + '%';
  }
}

let left_move = () =>{
  l = l + -movePer;
  if(l <= 0) {l = 0}
  for(const i of card) {
    if(card_page > 1)
    i.style.left = '-' + l + '%';
  }
}

span[1].onclick = () =>{right_move();}
span[0].onclick = () =>{left_move();}