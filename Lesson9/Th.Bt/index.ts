//bai 1
const person1: Record<string, number | string> = {
    name: "John",
    age: 20,
}
person1.major = "Computer Science";
console.log(person1);

//bai 2
const person2: Record<string, number | string> = { 
    name: "Alice",
    age: 25,
    job: "Designer",
}
delete person2.job;
console.log(person2);

//bai 3
const car3: Record<string, number | string> = { 
    brand: "Toyota", 
    model: "Camry", 
    year: 2020,
}
let slg_key: number = 0;
for (let key in car3){
    slg_key++;
}
console.log(slg_key);

//bai 4
const product: Record<string, number | string> = { 
    name: "Laptop", 
    price: 1000,
}
const productlist: Array<any>  =[];
for (let key in product){
    productlist[productlist.length]=[key, product[key]];
}
console.log(productlist);

//bai 5
const products5 = [
    { name: "Phone", price: 500 },
    { name: "Camera", price: 300 },
    { name: "Tablet", price: 700 },
]
for (let i=0; i<products5.length; i++){
    if (products5[i].name == "Camera"){
        console.log(products5[i]);
    }
}

//bai 6
const products6 = [
    { name: "Phone", price: 50 },
    { name: "Camera", price: 300 },
    { name: "Tablet", price: 700 },
]
for (let i=0; i<products6.length; i++){
    if (products6[i].price > 100){
        console.log(products6[i]);
    }
}

//bai 7
const person7: Record<string, number | string> = {
    name: "Bob",
    age: 25,
    job: "Developer",
}
person7.age =30;
console.log(person7);

//bai 8
const obj1: Record<string, number | string> = {
    a: 1,
    b: 2,
}
const obj2: Record<string, number | string> = {
    c: 3,
    d: 4,
}
for (let key in obj2){
    obj1[key] = obj2[key];
}
console.log(obj1);

//bai 9
const animal: Record<string, number | string> = {
    type: "Dog",
    name: "Buddy",
    age: 3,
}
for (let key in animal){
    console.log(key + `:` + animal[key]);
}

//bai 10
const car10: Record<string, string> = {
    brand: "BMW",
    model: "X5",
    // color: `red`,
}
let result: string = `FALSE`;
for (let key in car10){
    if (key == `color`){
        result = `TRUE`;
    }
}
console.log(result);