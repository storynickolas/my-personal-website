const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

function test() {
  alert('button test')
}
let background = 1

function add() {
  background < 5 ? background++ : background;
  document.getElementById('photo').src = `image${background}.jpg`
  console.log(background)
}

function subtract() {
  background >= 2 ? background-- : background;
  document.getElementById('photo').src = `image${background}.jpg`
  console.log(background)
}


document.getElementById('photo').src = `image1.jpg`


document.querySelector("body").appendChild(h2);






