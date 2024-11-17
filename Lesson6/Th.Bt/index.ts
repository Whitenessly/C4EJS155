//bai 1
let width_: number = 10
let length_: number = 20
console.log(`area= ${width_*length_} and perimeter= ${(width_+length_)*2}`)

//bai 2
let s:number =12345
const hh: number= (s - s%3600)/3600
const mm: number= (s%3600-(s%3600)%60)/60
const ss: number= (s%3600)%60
console.log(`${s}s = ${hh}h ${mm}m ${ss}s`)

//bai 3
let luythua:number=2
let coso:number=5
console.log(`${coso}^${luythua} = ${Math.pow(coso,luythua)}`)

//bai 4
let x:number=4
let y:number=7
let z:number=8
console.log(`TBC ${x}, ${y}, ${z} = ${(x+y+z)/3}`)

//bai 5
let x1:number=1
let y1:number=3
let x2:number=4
let y2:number=7
console.log(`distance (${x1},${y1}) and (${x2},${y2})= ${Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))}`)

//bai 6
let a:number=8
let b:number=7
let c:number=9
console.log(a>b && a>c)

//bai 7
let d:string=`tui la ai`
let e:string=`tui la ai`
console.log(d === e)

//bai 8
let f:number = 7
console.log(f>0)

//bai 9
let g:number= 2024
console.log(g%4==0)

//bai 10
let h1:number = 23
let m1:number = 30
let h2:number = 19
let m2:number = 50
let result:boolean = (h1>h2)||(h1==h2 && m1>m2)
result === true ? console.log(`${h1}h:${m1}m lớn hơn ${h2}h:${m2}m`):console.log(`${h1}h:${m1}m nhỏ hơn ${h2}h:${m2}m`)

