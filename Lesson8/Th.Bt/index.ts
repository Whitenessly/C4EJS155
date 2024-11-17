//bai 1
const names1: Array<string> = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names1[0]);

//bai 2
const names2: Array<string> = ["John", "Jane", "Jim", "Jake"];
names2[1] = `Mary`;
console.log(names2);

//bai 3
const names3: Array<string> = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i=0; i<names3.length; i++){
    console.log(names3[i]);
}

//bai 4
const names4: Array<string> = ["Alice", "Bob", "Charlie", "David"];
names4[names4.length]=`MindX`;
console.log(names4);

//bai 5
const numbers5: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers5_le: Array<number> =[];
let i5a:number =0;
let i5b:number =0;
while (i5a<numbers5.length){
    if (numbers5[i5a]%2==1){
        numbers5_le[i5b]=numbers5[i5a];
        i5b++;
    }
    i5a++;
}
console.log(`Các số lẻ của dãy: ${numbers5_le}`);

//bai 6
const names6: Array<string> = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
let SearchName:string =`David`;
for (let i=0; i<names6.length; i++){
    if (names6[i]==SearchName){
        break;
    }
}
console.log(`${SearchName} có tồn tại`);

//bai 7
const numbers7: Array<number> = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
let targetCounting:number = 2;
let CountingTimes:number =0;
for (let i=0; i<numbers7.length; i++){
    if (numbers7[i]==targetCounting){
        CountingTimes=CountingTimes+1;
    }
}
console.log(`${targetCounting} được lặp lại ${CountingTimes} lần`);

//bai 8
const numbers8: Array<number> = [5, 2, 9, 3, 7, 11, 8];
let max:number =0;
for (let i=0; i<numbers8.length;i++){
    if (numbers8[i]>max){
        max=numbers8[i];
    }
}
console.log(`Giá trị lớn nhất của dãy là: ${max}`)

//bai 9
const array: Array<number> = [1, 2, 3, 4, 5];
const array_reversed = [];
let i9a:number=0;
let i9b:number=array.length-1;
while (i9a<array.length){
    array_reversed[i9b]=array[i9a];
    i9a++;
    i9b--;
}
console.log(array_reversed);

//bai 10
const duplicatesArray: Array<number> = [1, 2, 2, 3, 4, 4, 5];
let i10: number=0;
while (duplicatesArray[i10]!=undefined){
    if (duplicatesArray[i10]==duplicatesArray[i10+1]){
        for (let i=i10;i<duplicatesArray.length;i++){
            duplicatesArray[i]=duplicatesArray[i+1];
        }
        duplicatesArray.length=duplicatesArray.length-1;
    } else {
        i10++;
    }
}
console.log(duplicatesArray);

//bai 11
const numbers11: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tong:number =0;
for (let i=0; i<numbers11.length; i++){
    tong=tong+numbers11[i];
}
console.log(tong);