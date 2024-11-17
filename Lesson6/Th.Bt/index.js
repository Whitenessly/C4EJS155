//bai 1
var width_ = 10;
var length_ = 20;
console.log("area= ".concat(width_ * length_, " and perimeter= ").concat((width_ + length_) * 2));
//bai 2
var s = 12345;
var hh = (s - s % 3600) / 3600;
var mm = (s % 3600 - (s % 3600) % 60) / 60;
var ss = (s % 3600) % 60;
console.log("".concat(s, "s = ").concat(hh, "h ").concat(mm, "m ").concat(ss, "s"));
//bai 3
var luythua = 2;
var coso = 5;
console.log("".concat(coso, "^").concat(luythua, " = ").concat(Math.pow(coso, luythua)));
//bai 4
var x = 4;
var y = 7;
var z = 8;
console.log("TBC ".concat(x, ", ").concat(y, ", ").concat(z, " = ").concat((x + y + z) / 3));
//bai 5
var x1 = 1;
var y1 = 3;
var x2 = 4;
var y2 = 7;
console.log("distance (".concat(x1, ",").concat(y1, ") and (").concat(x2, ",").concat(y2, ")= ").concat(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))));
//bai 6
var a = 8;
var b = 7;
var c = 9;
console.log(a > b && a > c);
//bai 7
var d = "tui la ai";
var e = "tui la ai";
console.log(d === e);
//bai 8
var f = 7;
console.log(f > 0);
//bai 9
var g = 2024;
console.log(g % 4 == 0);
//bai 10
var h1 = 23;
var m1 = 30;
var h2 = 19;
var m2 = 50;
var result = (h1 > h2) || (h1 == h2 && m1 > m2);
result === true ? console.log("".concat(h1, "h:").concat(m1, "m l\u1EDBn h\u01A1n ").concat(h2, "h:").concat(m2, "m")) : console.log("".concat(h1, "h:").concat(m1, "m nh\u1ECF h\u01A1n ").concat(h2, "h:").concat(m2, "m"));
