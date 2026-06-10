/*let name="John";
console.log(name);
var age=30;
const height=180;
console.log(age);
console.log(age+2);
console.log(age*2);
console.log(age/2);
console.log(age%2);
console.log(age-2);
console.log(age+=3);
console.log(age-=3);
console.log(age*=3);
console.log(age/=3);
console.log(age%=3);
console.log(age>height);
console.log(age<height);
console.log(age>=height);
console.log(age<=height);
console.log(age==height);
console.log(age===height);

-->if else if  
let food="Pizza";
let drink="Coke";
if(food==drink){
    console.log("Food and drink are the same");
}
else{
    console.log("Food and drink are different");
}
-->Nested if else
if(){
    if(){
    }
    else if(){
    }
}
-->for loop
for(let i=0;i<5;i++){
    console.log(i);
}
-->while loop
let j=0;
while(j<5){
    console.log(j);
    j++;
}*/

/*for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        console.log(i+"x "+j+"="+(i*j));
    }
}*/

/*function cook(){
    console.log("pour the Flour in tawa");
    console.log("rub it round order with gareta");
    console.log("spill some oil above it then wait for 2 minutes");
    console.log("twist it with the help of a spatula ");
    console.log("Atlast gentlely serve it in a plate");
}
cook();

function add(a,b){
    return a+b;
}
let a=5;
let b=10;
console.log(add(5,10));



function num(n){
    if(n>10){
        return;
    }
    console.log(n);
    n+=1;
    num(n);
}
num(1);
function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too lower nuber");
        guess(n);
    } else {
        console.log("Too higher number");
        guess(n);
    }
}

let number = Math.floor(Math.random() * 100) + 1;
guess(number);*/

let chacolate=["melodi","dairy milk","perk","kitkat"];
let sales={
    keerthana:chacolate[0],
    keerthi:chacolate[1],
    keerthika:chacolate[3], 
    swetha:chacolate[2]
}
console.log(sales);