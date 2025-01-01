class Person {
  _name: string = 'Muslim'
  age: number = 27
   constructor(name:string, age: number) {
    this._name = this._name
    this.age = this.age
   }
}
const ibrohim: Person = new Person("Muslim", 23)
const hamid: Person = new Person("hamid", 2)
console.log(ibrohim);
console.log(hamid);