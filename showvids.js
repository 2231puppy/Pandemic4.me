function shuffle() {
var totalItems = 30
var classname = "shuffle"
function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

let arr = [];

for (let i = 0; i < totalItems; i++) {
  arr.push(i);
}

arr = shuffleArray(arr);

elem = document.getElementsByClassName(classname); // The class name
elem.textContent = '';
for (let i = 0; i < totalItems; i++) {
  // Use elem[i] to append how necessary
  document.querySelector(elem).appendChild(elem[arr[i]])
}
for (let i = 0; i < totalItems - 25; i++) {
  document.querySelector(elem).removeChild(document.querySelector(elem).lastElementChild);
}
}

function search() {
ul = document.getElementById("searchdeck");
li = ul.getElementsByClassName('search');
for (i = 0; i < li.length; i++) {
  a = li[i].getElementsByTagName("p")[0];
  txtValue = a.textContent || a.innerText;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
  } else {
    li[i].style.display = "none";
  }
}
}