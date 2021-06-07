var myButton = document.getElementById("clickable");
var myUl = document.getElementById("ul-clickable");
myButton.onclick = function () {
  "use strict";
  myUl.classList.toggle("hidden");
};
