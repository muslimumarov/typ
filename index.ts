// function  add(a:number, b:number):number {
//   return a** b
// }
// console.log(add(4, 5));
// function pow(a:number, b: number): string {
//   return `${a ** b} - ${a + b}`
// }
// console.log(pow(3 , 5));

// function pow(x: any, y: any): any {
//    if(typeof x === "number" && typeof y === "number") {
//     return x + y
//   } else {
//     return `${x} ${y}`
//   }
// }
// console.log(pow(true, false));
let c: unknown = 20
let d: number = <number>c
let b: number = c as number
console.log(b);

let w: unknown = 20; // Hozircha `c` ma'lum emas.
console.log(c); // Ishlaydi: 20 

c = "Hello"; // O'zgartirish mumkin.
console.log(w); // Ishlaydi: Hello
let g: unknown = 'ldkfkdfj'
if(typeof g === 'number') {
       let a =  g *g
   console.log(a);
}else {

  console.log('malumot turi xato');
}