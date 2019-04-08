new Array(10)
new Array(10,11,12)
var myArr=[1,2,3,4]
myArr[2]=5
myArr[-7]=4
//if set array indexes e.g. -7 show ip in dir, but not array itself
dir(myArr)
myArr.push('george','kitty')//to end array addition
var family = ['dad', 'uncle']
family.unshift('mum')//['mum', 'dad', 'uncle']
family.length
family.length=2//clips array
family.length=22 //inserts undefined
[1,2,3].indexOf(3)
[{a:1}, {b:2}].indexOf({b:2})//-1 as different object references
var myObj ={a:1}, urObj={b:2}
[myObj, urObj].indexOf(myObj) //0

[1,2,3,4,5,4,3,2,1].indexOf(3,4)//6 starts searching at index 4
var arr =[1,2,3,4,5,6]
arr.slice(2,4)//from 2 up to not including  3,4
arr.splice(2)// [3,4,5,6] returns and removes from arr
//arr === [1,2]
var arr=[1,2,3,4,5,6]
arr.splice(2,2,'Texas')// returns [3,4], leaves [1,2,'Texas',5,6]

//map filter forEach, some, every
delete myArr[3] //[1,2,3,undefined,5,6]
myArr.forEach((elem, idx, arr) => {
  //element. index, array iterated over
});
[1,2,3,4].map((el,idx,arr)=>{return el*2})// [2,4,6,8]
[1,2,3,4].filter((el,idx,arr)=>{return el>2})// [3,4]
[1,2,3,4].some((el,idx,arr)=>{return el>2})//true
[1,2,3,4].every((el,idx,arr)=>{return el>2})//false

['happy', 0, ""].filter(Boolean)// ['happy']
Array instanceof Object //true
typeof [] // "object"
typeof {} // "object"
Array.isArray({})//false
Array.isArray([])//true

[1,2,3,4].reduce((sum,el,idx,arr)=>{
  return sum + el
}, 100)//110

["hello",,,,"js"].reduce((len, el)=>{
  return len+1
},0)
//2
function foo(){
  console.log(arguments, 'len', arguments.length, arguments[1])
}
foo(1,2,3,4) // [1,2,3,4], "len" 4,2

function foo(){
  console.log(Array.isArray(arguments))
  arguments.push(5)
  console.log(arguments, 'len', arguments.length, arguments[1])
}
foo(1,2,3,4)// false, object has no method push

function foo(){
  var args = Array.prototype.slice.call(arguments) //convert object to array
  args.push(5)
  console.log(args, 'len', args.length, args[1])
}
var dd = 'that js dude';
[].filter.call(dd, function(el,idx){
  return idx>7
})
//["D","u","d","e"]



