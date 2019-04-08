/*
this -inside scope, object, function


*/

this.table="window table"//this means global scope therefore window
console.log(window.table)

//this.garage.table
this.garage={
  table:"garage table"
}
let john = {
  table:"johns table",
  cleanTable(){
    console.log(this.table)//this means outer enviro, object
  }
}
//private var so cant ref this.john
johnsRoom.cleanTable()
this.garage.cleanTable();

//function is not an object, does not produce a scope
const cleanTable= function(){
  console.log(this.table)//global scope window table
}
//if "use strict" function wont be able to access outer global obj
// doesnt know what this is inside an object

cleanTable.call(this);//execute cleanTable as if member of global object, 
//therefore would produce cleaning window table

const cleanTable= function(soap){
  console.log(this.table, soap)//global scope window table
}
cleanTable.call(this, "some soap");
cleanTable.call(this.garage, "some soap");
cleanTable.call(johnsRoom, "some soap");

// inner function
const cleanTable= function(soap){
  const innerFunction=function(_soap){
    console.log(`cleaning ${this.table} using ${_soap}`)
  }
  innerFunction(soap)
}
cleanTable.call(this, "some soap");//cannot read property table
//using this inside a function not very useful unless using call, apply, bind

//solution
const cleanTable= function(soap){
  let that=this;
  const innerFunction=function(_soap){
    console.log(`cleaning ${that.table} using ${_soap}`)
  }
  innerFunction(soap)
}

//or
innerFunction.call(this,soap)
innerFunction.bind(this)(soap)
//bind creates new function with this

const cleanTable= function(soap){
  const innerFunction= (_soap)=>{
    console.log(`cleaning ${that.table} using ${_soap}`)
  }
  innerFunction(soap)
}
// arrow function takes this from outer scope
//so this would work

// when not strict would produce window
function hi(){
  function yo(){
      console.log(this)
  }
  yo()
}

// this inside a constructor
let createRoom= function(name){
  this.table=`${name}s room`
}
createRoom.prototype.cleanTable = function(soap){
  console.log(`cleaning ${this.table} using ${soap}` )
}
const jillsRoom = new createRoom('jill')
const johnsRoom = new createRoom('john')

jillsRoom.cleanTable('some soap')
// cleaning johns table using  some soap

//this inside class
class createRoom{
  constructor(name){
    this.table=`${name}s table`
  }
  cleanTable(soap){
    console.log(`cleaning ${this.table} using ${soap}`)
  }
}
const jillsRoom = new createRoom('jill')
jillsRoom.cleanTable('some soap')

(()=>{ console.log(this)})() //window