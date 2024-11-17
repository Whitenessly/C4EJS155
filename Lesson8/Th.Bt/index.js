//bai 1
var names1 = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names1[0]);
//bai 2
var names2 = ["John", "Jane", "Jim", "Jake"];
names2[1] = "Mary";
console.log(names2);
//bai 3
var names3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (var i = 0; i < names3.length; i++) {
    console.log(names3[i]);
}
//bai 4
var names4 = ["Alice", "Bob", "Charlie", "David"];
names4[names4.length] = "MindX";
console.log(names4);
//bai 5
var numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbers5_le = [];
var i5a = 0;
var i5b = 0;
while (i5a < numbers5.length) {
    if (numbers5[i5a] % 2 == 1) {
        numbers5_le[i5b] = numbers5[i5a];
        i5b++;
    }
    i5a++;
}
console.log("C\u00E1c s\u1ED1 l\u1EBB c\u1EE7a d\u00E3y: ".concat(numbers5_le));
//bai 6
var names6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
var SearchName = "David";
for (var i = 0; i < names6.length; i++) {
    if (names6[i] == SearchName) {
        break;
    }
}
console.log("".concat(SearchName, " c\u00F3 t\u1ED3n t\u1EA1i"));
//bai 7
var numbers7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
var targetCounting = 2;
var CountingTimes = 0;
for (var i = 0; i < numbers7.length; i++) {
    if (numbers7[i] == targetCounting) {
        CountingTimes = CountingTimes + 1;
    }
}
console.log("".concat(targetCounting, " \u0111\u01B0\u1EE3c l\u1EB7p l\u1EA1i ").concat(CountingTimes, " l\u1EA7n"));
//bai 8
var numbers8 = [5, 2, 9, 3, 7, 11, 8];
var max = 0;
for (var i = 0; i < numbers8.length; i++) {
    if (numbers8[i] > max) {
        max = numbers8[i];
    }
}
console.log("Gi\u00E1 tr\u1ECB l\u1EDBn nh\u1EA5t c\u1EE7a d\u00E3y l\u00E0: ".concat(max));
//bai 9
var array = [1, 2, 3, 4, 5];
var array_reversed = [];
var i9a = 0;
var i9b = array.length - 1;
while (i9a < array.length) {
    array_reversed[i9b] = array[i9a];
    i9a++;
    i9b--;
}
console.log(array_reversed);
//bai 10
var duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
var i10 = 0;
while (duplicatesArray[i10] != undefined) {
    if (duplicatesArray[i10] == duplicatesArray[i10 + 1]) {
        for (var i = i10; i < duplicatesArray.length; i++) {
            duplicatesArray[i] = duplicatesArray[i + 1];
        }
        duplicatesArray.length = duplicatesArray.length - 1;
    }
    else {
        i10++;
    }
}
console.log(duplicatesArray);
//bai 11
var numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tong = 0;
for (var i = 0; i < numbers11.length; i++) {
    tong = tong + numbers11[i];
}
console.log(tong);
