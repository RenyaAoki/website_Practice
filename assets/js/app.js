let a = 1;
a = 2;
console.log(a);

const b = 3;
b =4;
console.log(b);

let name = "Taro";
let age = 16;

console.log("名前:", name);
console.log("年齢:", age);

if (age >= 18) {
    console.log("成人です");
} else {
    console.log("未成年です");
}

let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

function greet(userName) {
    return "こんにちは " + userName;
}

console.log(greet(name));