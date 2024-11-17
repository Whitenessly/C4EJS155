//bai 1
var ham1 = function (a, b, x) {
    var result = a * x + b;
    return result;
};
console.log(ham1(3, 4, 5));
//bai 2
var perimeter = function (width, length) {
    var result = (width + length) * 2;
    return result;
};
console.log(perimeter(10, 15));
//bai 3
var area = function (r) { return Math.PI * Math.pow(r, 2); };
console.log(area(5));
//bai 4
var nto = function (x) {
    var du = 0;
    for (var i = 2; i < x; i++) {
        if (x % i == 0) {
            du = x % i;
            break;
        }
    }
    du > 0 ? console.log("TRUE") : console.log("FALSE");
};
nto(17);
