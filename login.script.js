
//side menu
// Function expression to select elements.
const selectElement = (s) => document.querySelector(s);


//Open the menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav-list').classList.add('active');
});


//Close the menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav-list').classList.remove('active');
});



//login Form 
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}
