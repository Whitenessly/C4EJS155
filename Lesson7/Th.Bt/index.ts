//bai 1
let tong: number = 0;
for (let i1:number =1; i1 <=100; i1++ ){
    tong +=i1;
}
console.log(`tổng các số từ 1 đến 100 = ${tong}`);

//bai 2
for (let i2:number =0; i2 <= 100; i2++){
    if (i2%3==0 && i2%5==0){
        console.log(i2);
    }
}

//bai 3
let a:number = 5;
let b:number = 1;
if (a%1==0){
    for (let i3:number = 1; i3<=a; i3++){
        b*=i3;
    }
    console.log(`Giai thừa của ${a} = ${b}`);
} else{
    console.log(`số a không thỏa mãn`);
}

//bai 4
for (let i4a:number=2; i4a<=9; i4a++){
    console.log(`Bảng cửu chương ${i4a}`)
    for (let i4b: number=1; i4b<=10; i4b++){
        console.log(`${i4a}x${i4b}=${i4a*i4b}`);
    }
}

//bai 5
let c:number =35;
let i5:number =c;
let binary:number =0;
let k:number =1;
while(i5!=0){
    binary +=(i5%2)*k;
    k *= 10;
    i5 = (i5-(i5%2))/2
}
console.log(`${c}(10)=${binary}(2)`)

//bai 6
let n6:number =5;
let i6:number =1;
let result6:number=0;
while(i6!=n6+1){
    result6 =  Math.sqrt(i6+result6)
    i6++
}
console.log(result6)

//bai 7
let n7:number =6;
let i7:number =n7;
let result7:number=0;
while(i7!=0){
    result7 =  Math.sqrt(i7+result7)
    i7--
}
console.log(result7)