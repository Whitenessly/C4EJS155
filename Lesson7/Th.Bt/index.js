//bai 1
var tong = 0;
for (var i1 = 1; i1 <= 100; i1++) {
    tong += i1;
}
console.log("t\u1ED5ng c\u00E1c s\u1ED1 t\u1EEB 1 \u0111\u1EBFn 100 = ".concat(tong));
//bai 2
for (var i2 = 0; i2 <= 100; i2++) {
    if (i2 % 3 == 0 && i2 % 5 == 0) {
        console.log(i2);
    }
}
//bai 3
var a = 5;
var b = 1;
if (a % 1 == 0) {
    for (var i3 = 1; i3 <= a; i3++) {
        b *= i3;
    }
    console.log("Giai th\u1EEBa c\u1EE7a ".concat(a, " = ").concat(b));
}
else {
    console.log("s\u1ED1 a kh\u00F4ng th\u1ECFa m\u00E3n");
}
//bai 4
for (var i4a = 2; i4a <= 9; i4a++) {
    console.log("B\u1EA3ng c\u1EEDu ch\u01B0\u01A1ng ".concat(i4a));
    for (var i4b = 1; i4b <= 10; i4b++) {
        console.log("".concat(i4a, "x").concat(i4b, "=").concat(i4a * i4b));
    }
}
//bai 5
var c = 35;
var i5 = c;
var binary = 0;
var k = 1;
while (i5 != 0) {
    binary += (i5 % 2) * k;
    k *= 10;
    i5 = (i5 - (i5 % 2)) / 2;
}
console.log("".concat(c, "(10)=").concat(binary, "(2)"));
//bai 6
var n6 = 5;
var i6 = 1;
var result6 = 0;
while (i6 != n6 + 1) {
    result6 = Math.sqrt(i6 + result6);
    i6++;
}
console.log(result6);
//bai 7
var n7 = 6;
var i7 = n7;
var result7 = 0;
while (i7 != 0) {
    result7 = Math.sqrt(i7 + result7);
    i7--;
}
console.log(result7);
