// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let person = "jonas";
// let PI = 3.1414;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// // console.log(typeof null); //objekat,jer je na samom pocetku JS-a null bio objekat pa nisu mogli da promene to jer bi crashalo.
// //

// let age = 30;
// age = 31; //we called it reinicijalizacija

// const birthYear = 1991;
// // birthYear = 1990;

// // const job;

// var job = "programmer";
// job = "teacher";

// // lastName = "Schmedtmann";
// // console.log(lastName);

// //

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means to the power of 3 = 2*2*2=8

// const firstName = "jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; //15
// x += 10; //x=x+10;
// console.log(x); //25
// x *= 4; //x=x*4=100
// x++;
// x--;
// console.log(x);

// //Comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 20);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2020);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = 30 + 27 / 2;
// console.log(averageAge);

//1st codding challenge.

// // const masamarkova = 75;
// // const visinamarkova = 1.69;
// // const masadzonova = 92;
// // const visinadzonova = 1.95;

// // const BMImarkova = masamarkova / Math.pow(visinamarkova, 2);
// // const BMIdzonova = masadzonova / Math.pow(visinadzonova, 2);
// // console.log(BMImarkova);
// // console.log(BMIdzonova);
// // const markovaveca = BMImarkova > BMIdzonova;
// // console.log(markovaveca);

// //strings

// const firstName = `Jonas`;
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " +
//   firstName +
//   ", a " +
//   (year - birthYear) +
//   " years old,and he is a " +
//   job +
//   "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName},a ${year - birthYear} year old ${job}.`;
// console.log(jonasNew);

// console.log(`Just a regular string..`);

// console.log(`String \n\ multiple \n\ lines`);

//if & else

// const age = 15;

// if (age >= 18) {
//   console.log(`Sara can start driving licence!`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sara is too young.Wait another ${yearsLeft} years!`);
// }

// const birthYear = 1991;
// if (birthYear <= 2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }

//2nd coding challange

// const markovamasa = 75;
// const markovavisina = 1.75;

// const dzonovamasa = 92;
// const dzonovavisina = 1.93;

// const BMImarko = markovamasa / Math.pow(markovavisina, 2);
// const BMIdzon = dzonovamasa / Math.pow(dzonovavisina, 2);

// if (BMImarko > BMIdzon) {
//   console.log(
//     `Markov BMI koji iznosi ${BMImarko} je veci od Dzonovog BMI koji iznosi ${BMIdzon}.`
//   );
// } else if (BMImarko == BMIdzon) {
//   console.log(`Njihovi BMI-ovi su jednaki!`);
// } else {
//   console.log(
//     `Dzonov BMI koji iznosi ${BMIdzon} je veci od Markovog BMI koji iznosi ${BMImarko}`
//   );
// }

// // type conversion // //

// const inputYear = `1991`;
// console.log(Number(inputYear));
// console.log(+inputYear + 18);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23));
// //type coercion//kad je u pitanju string i broj a izmedju + uvek se konverta broj u string-toString()-automatski.
// console.log(`I am ` + 23 + ` years old`);
// console.log(`23` - `10` - 3);

//FALSY VALUES//

//5 falsy values:0,"",undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("Don`t spend it All!;)");
} else {
  console.log("You should get a job!");
}
let height = 123;
if (height) {
  console.log(`YAY height is defined!`);
} else {
  console.log(`Height is UNDEFINED!`);
}
