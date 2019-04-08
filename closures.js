/*
one of most asked questions in JS

lexical scoping- variable defined outside scope are still accessible 
*/
let i=1;
const f= ()=>{
  console.log(i)
}
f(); //1

//unpredictable, as depending where move f wont necc be accessible.
//can pass function round so might be defined in one scope and executed in another

if(true){let p=1; var j=2;}
console.log(p)//uncaught reference error
console.log(j)//2

let f;
if(true){
  let i=1;
  f=()=>{
    console.log(i)
  }
}
console.log(i);//unavailable
f();//1
console.dir(f)//look at scopes, see block scope

//define function somewhere call somewhere else

let f = ()=>{
  let i=1;
  let j=2;
  return ()=>{
    console.log(i)
  }
}
console.dir(f());//where before saw scope, now see closure
// i is inside closure, j is not as not used, only closure for variables use in future

let i=5;
f=()=>{
  console.log(i)
}
function outerf(f){
  let i=3; 
  console.log(f())
}
outerf(f);//5, resolves to when defined


// closure inside a loop
for( let i=0; i<3;i++){
  const f=()=>{
    console.log(i);
  }
  f();
}
// 0, 1,2


for( let i=0; i<3;i++){
  setTimeout(()=>{
    console.log(i);
  },1000)
}
console.log("after the loop")
// after the loop, 0,1,2

for( var i=0; i<3;i++){
  setTimeout(()=>{
    console.log(i);
  },1000)
}
// 3 3 3
// let is block scope so at each loop iteration get new i
// each function holds i closure
// var has function scope, doesnt create new var, changes val
// so when called val i has reached 3.

// value of i is when function is called not when defined.

//when function passed around it is passed with its attached scope and closure
//that does not change, but if the value it scopes/closes around changes before executed
//it executes that value

// wrap immediately creates a block scope 0,1,2
for( var i=0; i<3;i++){
  ((i)=>{
    setTimeout(()=>{
      console.log(i);
    },1000)
  })(i)
}

