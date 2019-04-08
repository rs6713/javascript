// weird questions to outsmart you
// how you handle unknown situation
// explain process


// Top 10 Questions

// difference between let and var
// let introduced ES2015, won't work old browsers
// block scope- die garbage collected at end of block scope while var has function scope, only respects function bloack.
// vars get hoisted, let dont get hoited

let x = function(){
  if(true){
    var v=2;
    let l =1;
  }
  console.log(v)//2
  console.log(l)//uncaught exception
}
x();

let x = function(){
  if(true){
    console.log(v)//undefined
    console.log(l)//uncaught exception
    var v=2;
    let l =1;
  }
}
x();

// difference triple equal, double equal
// both comparison operators
// double compares value implicit type conversion, triple value and type
// engine tries to make both sides same type via conversion

// difference let and const
// const after first assignment cannot be reassigned
// let can change type, 
const c;
c=1;//error, as c defined as undefined

const c=[1,2];
c.push(3); //[1,2,3] can be modified, but cannot be reassigned to a different object
//use const for object

//null and undefined
//both represent empty, undefined is JS default, null is your custom setting
// should not assign undefined yourself
// typeof(undefined)==> undefined, typeof(null)==>object

//arrow function
const profile = {
  firstName: "",
  lastName: "",
  setName: function(name){
    let splitName = function(n){
      let nameArray = n.split(" ")
      this.firstName=nameArray[0];
      this.lastName=nameArray[1];
    }
    splitName(name);
  }
}
profile.setName("John Doe")
console.log(firstName)//undefined
console.log(window.firstName)//john

const profile = {
  firstName: "",
  lastName: "",
  setName: function(name){
    let splitName =(n)=>{
      let nameArray = n.split(" ")
      this.firstName=nameArray[0];
      this.lastName=nameArray[1];
    }
    splitName(name);
  }
}
profile.setName("John Doe")
console.log(profile.firstName)//john
//arrow function doesnt have its own this
//function() has its own this, but not a constructor so effectively set to no object.

//protypal inheritance
//every object has prototypes can set props/functions
//all further objects created from this object, auto inherit property
//object when called first looks at own properties then its parents
// 1000 objects only 1 prototype function, not 1000 copies.

let car = function(model){
  this.model=model
}

car.prototype.getModel=function(){return this.model}
let toyota = new car('toyate')
console.log(toyota.getModel())



console.log(funcD())
console.log(func())
// function declaration
// undefined
// uncaught reference error

// function declaration vs expression
function funcD(){
  console.log("function declaration")
}
//behaves like varaible, let no hoisting
let func = function(){
  console.log("function expression")
}
//to pass function to another function must be the expression, as can only pass variables

//promises- async call to wait, then execution callback function, 
//might be series async call, could be nested callback hell.

var p1= new Promise(function(resolve, reject){
  resolve()
})
p1.then(function(r){
  return new Promise()
}).then(function(result){
  //...
})
//just return series promise, cleaner series chain


// setTimeout()
setTimeout(function(){
  console.log("a")
}, 0)
console.log("b")
console.log("c")
// output b, a
// set timeout becomes async, so must wait for everything on stack to finish, then async can run


// what is closure how to use it
// when function returns another function holds all its environment needed,

let obj= function(){
  let i=0;
  return {
    setI(k){
      i=k;
    },
    getI(){
      return i
    }
  }
}
let x = obj();
x.setI(2)
x.getI()

//type conversion

console.log([]+[])// "" + works on numbers or strings, typecast empty array to string
console.log({}+{})//typecasting

// template arguments
function a(){
  return "hello";
}
const sentence = a `hi`;// function with template string next to it, considered an argument
console.log(sentence)//hello

//how to make all contents page editable
//<div contenteditable="true">hello</div>

document.body.contentEditable=true;

// this refers to outer environment when called.not when defined
//functioms can be passed around.
function y(){
  console.log(this.length)
}
var x={
  length:5,
  method: function(y){
    arguments[0]();
  }
}
x.method(y,1)//2
//arguments object array like, holds y,1, tbis now means arguments

var arr=[];
for(var i=0; i<5; i++){arr.push(function(a){return a*i})}
//all return a*5, i ends on value 5.
arr[3](2)//10, 

for(let i=0; i<5; i++){arr.push(function(a){return a*i})}
arr[2](2)// new i each time, separate var ref, so 4


const x='constructor'
console.log(x[x](01))
x.constructor//trying to find constructor property
console.log(x.constructor)// function String()
String(01) //1

console.log(0.1+0.2)
// 0.30000000000004 
// decimals are base 10, so for computer to understand some precision error in conversion

console.log(('hi').__proto__.__proto__.__proto__)
//proto is its creator, String constructor
// Object() creates all objects, including String object
// Object is top level constructor therefore get null

//function returns total number arguments passed to it
function a(...args){
  return args.length
  return [].slice.call(arguments).length //convert arguments obj to array
}

var A = {
  x: function(){
    console.log('x');
    return A//this
  },
  y: function(){
    console.log('y')
    return A//this
  },
  z:function(){
    console.log('z')
    return A//this
  }
}
A.x().y().z()
//method chaining, print x y z













