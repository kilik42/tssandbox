//console.log("hello from ts");
let myString: string;
let myNum : number;
let myBool: boolean;
let myVar: any;

//let strArr : string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;
let strNumTuple: [string, number];


myString = "hello world".slice(0,3);
myNum = 5 + 5;
myBool = false;
myVar = 5;


strArr = ['hello','world'];
numArr = [1,2,3];
boolArr = [true, false, true];
strNumTuple = ['HELLO', 4,3,4];

let myVoid: void = undefined;
console.log(myVoid);

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(strArr);
