let dugme = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let score = 20;
let highscore = 0;
let trpoeni = document.getElementById("trpoeni");
let makspoeni = document.getElementById("makspoeni");

dugme.addEventListener("click", function () {
  let input = document.getElementById("userinput").value;
  if (input != number) {
    score--;
  }
  if (input == number) {
    document.body.style.backgroundColor = "green";
    output.innerHTML = `✅Pogodili ste broj,to je broj ${number} !`;
    trpoeni.innerHTML = `🔱Trenutni poeni:${score}`;
    makspoeni.innerHTML = `🪙Maksimalni poeni:${makspoeni}`;
  } else if (input < number) {
    output.innerHTML = "❌Vas broj je manji od zamisljenog!";
  }
  if (input > number) {
    output.innerHTML = "❌Vas broj je veci od zamisljenog!";
  }
});

let background1 = document.getElementsByClassName("div1");
let background2 = document.getElementsByClassName("div2");
let h1 = document.getElementsByTagName("h1");
let h3 = document.getElementsByTagName("h3");
let p = document.getElementsByTagName("p");
let naslov = document.getElementById("naslovcina");
let doleinput = document.getElementById("kontainer");
console.log(background1);
console.log(background2);

// background1.addEventListener("click", function (e) {
//   e.preventDefault();
//   document.body.style.backgroundColor = "black";
//   h1.forEach((e) => {
//     e.style.color = "ghostwhite";
//   });
//   h3.forEach((e) => {
//     e.style.color = "ghostwhite";
//   });
//   naslov.style.backgroundColor = "rgb(61, 59, 59)";
//   doleinput.style.backgroundColor = "rgb(61, 59, 59)";
// });

// background2.addEventListener("click", function () {
//   document.body.style.backgroundColor = "white";
//   h1.forEach((e) => {
//     e.style.color = "ghostwhite";
//   });
//   h3.forEach((e) => {
//     e.style.color = "ghostwhite";
//   });
//   naslov.style.backgroundColor = "rgb(61, 59, 59)";
//   doleinput.style.backgroundColor = "rgb(61, 59, 59)";
// });
