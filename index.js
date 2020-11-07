async function asyncExample() {
    return 'From Async Function';
}
///
/// Variable Declaration
///
// let age: any = 23;
let age;
age = '23';
/// Here `: number`, the strong explicit type is redundnant; as we are implicitly typing it
let age2 = 23;
let font;
const Player = {
    first: 'Rahzun',
    last: 'Tamang'
};
const Player2 = {
    first: 'Leo',
    last: 'Messi',
    fast: true
};
///
/// Function
///
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(2, 8);
///
/// Arrays
///
const arr = [];
arr.push(1);
const arr2 = [];
arr2.push(false);
arr2.push(54);
arr2.push('23');
///
/// Generics
///
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
export {};
