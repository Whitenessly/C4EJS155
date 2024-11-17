//bai 1
const ham1 = (a:number,b:number,x:number) => {
    const result = a*x+b;
    return result;
}
console.log(ham1(3,4,5));

//bai 2
const perimeter = (width:number,length:number) => {
    const result = (width+length)*2;
    return result;
}
console.log(perimeter(10,15));

//bai 3
const area = (r:number) => Math.round(Math.PI*Math.pow(r,2),2);
console.log(area(5));

//bai 4
const nto = (x:number) => {
    let du:number=0;
    for (let i=2; i<x; i++){
        if (x%i==0){
            du=x%i;
            // break;
        }
    }
    du > 0 ? console.log(`TRUE`):console.log(`FALSE`);
}
nto(17);
