var nav = document.getElementById("topbar");
var navSearch = document.getElementById("navSearch");
var bodySearch = document.getElementById("bodySearch");
console.log(bodySearch.value);

window.addEventListener("scroll", scrollNav);
  //console.log(window.scrollY);


function scrollNav(e) {

  var scrollPos = window.scrollY;
  if (scrollPos>0) {
    nav.className = "";
    nav.classList.add("bgBlue");
  } else {
    nav.className = "";
    nav.classList.add("bgTrans");
  }

  if (scrollPos<450) {
    navSearch.className = "";
    navSearch.classList.add("hide");
  } else {
    navSearch.className = "";
    navSearch.classList.add("show");
    bodySearch.value = navSearch.value;
  }
}