let dugme = document.getElementById("btn");
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random() * 20) + 1;
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
    makspoeni.innerHTML = `🪙Maksimalni poeni:${highscore}`;
    if (highscore < score) {
      highscore = score;
      trpoeni.innerHTML = `🔱Trenutni poeni:${score}`;
      makspoeni.innerHTML = `🪙Maksimalni poeni:${highscore}`;
    }
  } else if (input < number) {
    trpoeni.innerHTML = `🔱Trenutni poeni:${score}`;
    makspoeni.innerHTML = `🪙Maksimalni poeni:${highscore}`;
    output.innerHTML = "❌Vas broj je manji od zamisljenog!";
  }
  if (input > number) {
    trpoeni.innerHTML = `🔱Trenutni poeni:${score}`;
    makspoeni.innerHTML = `🪙Maksimalni poeni:${highscore}`;
    output.innerHTML = "❌Vas broj je veci od zamisljenog!";
  }
});

let again = document.getElementById("again");

again.addEventListener("click", function (e) {
  e.preventDefault();
  number = Math.floor(Math.random() * 20) + 1;
  console.log(number);
  score = 20;
  document.body.style.backgroundColor = "black";
  trpoeni.innerHTML = `🔱Trenutni poeni:${score}`;
  makspoeni.innerHTML = `🪙Maksimalni poeni:${highscore}`;
  output.innerHTML = "Unesite broj!";
  document.querySelector("input").value = "";
});

let background1 = document.getElementsByClassName("div1")[0];
let background2 = document.getElementsByClassName("div2")[0];
let h1 = document.getElementsByTagName("h1");
let h3 = document.getElementsByTagName("h3");
let p = document.getElementsByTagName("p");
let naslov = document.getElementById("naslovcina");
let doleinput = document.getElementById("kontainer");
console.log(background1);
console.log(background2);

background1.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "black";
  Array.from(h1).forEach((e) => {
    e.style.color = "ghostwhite";
  });
  Array.from(h3).forEach((e) => {
    e.style.color = "ghostwhite";
  });
  naslov.style.backgroundColor = "rgb(61, 59, 59)";
  doleinput.style.backgroundColor = "rgb(61, 59, 59)";
});

background2.addEventListener("click", function () {
  document.body.style.backgroundColor = "gainsboro";
  Array.from(h1).forEach((e) => {
    e.style.color = "black";
  });
  Array.from(h3).forEach((e) => {
    e.style.color = "black";
  });
  naslov.style.backgroundColor = "rgb(61, 59, 59)";
  doleinput.style.backgroundColor = "rgb(61, 59, 59)";
});
