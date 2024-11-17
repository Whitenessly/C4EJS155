//bai 1
var person1 = {
    name: "John",
    age: 20,
};
person1.major = "Computer Science";
console.log(person1);
//bai 2
var person2 = {
    name: "Alice",
    age: 25,
    job: "Designer",
};
delete person2.job;
console.log(person2);
//bai 3
var car3 = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
};
var slg_key = 0;
for (var key in car3) {
    slg_key++;
}
console.log(slg_key);
//bai 4
var product = {
    name: "Laptop",
    price: 1000,
};
var productlist = [];
for (var key in product) {
    productlist[productlist.length] = [key, product[key]];
}
console.log(productlist);
//bai 5
var products5 = [
    { name: "Phone", price: 500 },
    { name: "Camera", price: 300 },
    { name: "Tablet", price: 700 },
];
for (var i = 0; i < products5.length; i++) {
    if (products5[i].name == "Camera") {
        console.log(products5[i]);
    }
}
//bai 6
var products6 = [
    { name: "Phone", price: 50 },
    { name: "Camera", price: 300 },
    { name: "Tablet", price: 700 },
];
for (var i = 0; i < products6.length; i++) {
    if (products6[i].price > 100) {
        console.log(products6[i]);
    }
}
//bai 7
var person7 = {
    name: "Bob",
    age: 25,
    job: "Developer",
};
person7.age = 30;
console.log(person7);
//bai 8
var obj1 = {
    a: 1,
    b: 2,
};
var obj2 = {
    c: 3,
    d: 4,
};
for (var key in obj2) {
    obj1[key] = obj2[key];
}
console.log(obj1);
//bai 9
var animal = {
    type: "Dog",
    name: "Buddy",
    age: 3,
};
for (var key in animal) {
    console.log(key + ":" + animal[key]);
}
//bai 10
var car10 = {
    brand: "BMW",
    model: "X5",
    // color: `red`,
};
var result = "FALSE";
for (var key in car10) {
    if (key == "color") {
        result = "TRUE";
    }
}
console.log(result);
