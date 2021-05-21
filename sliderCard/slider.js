const controls = document.querySelector(".controls");
const boxContainer = document.querySelector(".box__container");
const allBoxes = boxContainer.children;
const boxContainerWidth = boxContainer.offsetWidth;
const margin = 30;
let items = 0;
let totalItems = 0;
let jumpSlideWidth = 0;

// Responsive
responsive = [
  { breakpoint: { width: 0, item: 1 } }, //se width for maior que 0(show 1box)
  { breakpoint: { width: 480, item: 2 } }, //se width for maior que 480 (show 2box)
  { breakpoint: { width: 768, item: 3 } }, //se width for maior que 768 (show 4box)
  { breakpoint: { width: 1024, item: 4 } }, //se width for maior que 1024 (show 4box)
];

function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakpoint.width) {
      items = responsive[i].breakpoint.item;
    }
  }

  // console.log("items:" + items);
  // console.log("window width:" + window.innerWidth);
  start();
}

function start() {
  let totalItemsWidth = 0;
  for (let i = 0; i < allBoxes.length; i++) {
    // width and margin setup of items
    allBoxes[i].style.width = boxContainerWidth / items - margin + "px";
    allBoxes[i].style.margin = margin / 2 + "px";
    totalItemsWidth += boxContainerWidth / items;
    totalItems++;
  }
  // box__container width set up
  boxContainer.style.width = totalItemsWidth + "px";

  // slider controls numbers set up
  const allSlides = Math.ceil(totalItems / items);
  const ul = document.createElement("ul");
  for (let i = 1; i <= allSlides; i++) {
    const li = document.createElement("li");
    li.id = i;
    li.innerHTML = i;
    li.setAttribute("onclick", "controlSlides(this)");
    ul.appendChild(li);
    if (i == 1) {
      li.className = "active";
    }
  }
  controls.appendChild(ul);
}
// when click on numbers, slide to next slide
function controlSlides(elem) {
  // select controls children 'ul' element
  const ul = controls.children;
  // select ul children 'li' elements
  const li = ul[0].children;

  let active;
  for (let i = 0; i < li.length; i++) {
    if (li[i].className == "active") {
      // find who is now active
      active = i;
      // remove active class from all 'li' elements
      li[i].className = "";
    }
  }
  // add active class to current slide
  elem.className = "active";

  var numb = elem.id - 1 - active;
  jumpSlideWidth = jumpSlideWidth + boxContainerWidth * numb;
  boxContainer.style.marginLeft = -jumpSlideWidth + "px";
}

window.onload = load();
