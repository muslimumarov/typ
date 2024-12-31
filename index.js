"use strict";
// function  add(a:number, b:number):number {
//   return a** b
// }
// console.log(add(4, 5));
// function pow(a:number, b: number): string {
//   return `${a ** b} - ${a + b}`
// }
// console.log(pow(3 , 5));
function pow(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(pow('slsls', 'ldkfjdf'));
//# sourceMappingURL=index.js.map