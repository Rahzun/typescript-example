import * as _ from 'lodash';

async function asyncExample() {
  return 'From Async Function'
}



///
/// Variable Declaration
///
// let age: any = 23;
let age: any;
age = '23';


/// Here `: number`, the strong explicit type is redundnant; as we are implicitly typing it
let age2: number = 23; 


type Style = 'bold' | 'italic' | 'underline';
let font: Style;




///
/// Interface
///
interface Player {
  first: string,
  last: string,
  [key: string]: any // to not make restrictive
}

const Player: Player = {
  first: 'Rahzun',
  last: 'Tamang'
}

const Player2: Player = {
  first: 'Leo',
  last: 'Messi',
  fast: true
}




///
/// Function
///
function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

pow(2, 8)




///
/// Arrays
///
const arr: number[] = []
arr.push(1)
// arr.push('23')   // throws error as arr only stores number type, below it works while using `type`
// arr.push(false)

type MyList = [boolean?, number?, string?]  // Question mark after the type makes it `OPTIONAL`
const arr2: MyList = []
arr2.push(false)
arr2.push(54)
arr2.push('23')




///
/// Generics
///
class Observable<T> {
  constructor(public value: T){}
}

let x: Observable<number>;
let y: Observable<Player>;






