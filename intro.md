# Javascript
Lots powerful javascript library frameworks, need to understand language itself.


###syntax parsers- program reads code, determines grammar validity.
compilers build your programs, interpret your code convert to computer instructions. translation. Engine can decide to do other things as well. 

###execution contexts- wrapper to help manage code thats running, lots lexical environments,which one running detmrmined via execution contexts.   

###lexical environments- where something sits physically code you write. 
variables lexically insside functions, lexical environment important determines how interacts with other code, 

name-val pair, name maps to unique value, only maps to one value in each execution context
object- collection name value pairs.

Global environment, global object, not inside function
code is run in execution context, base execution context is global, accessible everywhere in code, creates global object, 'this'.

'this' is window browser window
window is same object, global object inside browsers. 
each tab own global execution context.
different engines have different global object defaults.

window - variables and functions created in global attached to this object, can see when print window.

outer environment- 'this' is reference to outer environemnt, when global no further outer so defaults to global.

##execution context creation and Hoisting- 
function still runs but a undefined.
b();
console.log(a)
var a=2;
function b(){
  console.log("b called")
}
javascript engine isnt running code direction, creats execution context two phaess. creation phase: creates global object, this, outer environment, parser reads functions sets up memory space for variables and functions 'hoisting'.

function in entirety is in memory space, but assignments are in execution phase, so a given undefined value prior to this. 

## javascript & undefined
is not defined uncaught reference error never found var a;, undefined value is special, internal means value hasn't been set.
a === undefined special keyword, value

never set yourself value to undefined
a = undefined
better to let it solely mean you've never set the value.

## Code execution
reads code line by line, executing it
single threaded synchronous execution
- one command executed at a time, under the hood of the browser ,aybe not but as far as programmer is concerned.
synchronous- executed one line at a time

## Function invocation, execution stack
innovation- running a function

function b(){}
function a(){b()}
a()
New excution context created when a called, put on execution stack
own space variables and functions. runs create phase, executes then pops off stack.

## functions, context, variable environments
environment variables- where var lives, relates to eachother
each esxectuion context it own memory space, variable environment.

scope- where are we able to see the variable.
defined in different functions, vars of same name are distinct.

## The scope chain
'''
function b(){console.log(myVar)}//1
function a(){var myVar=2; b();}
var myVar=1;
a();
'''
prints one, as outer environment, where function defined
each execution context has reference to its outer environment
for b and a both outer environments are global.
despite a below b in execution stack.

cares about lexical environemnt for outer reference, looks for variable in outer reference environment depends on lexical environment (where placed)
Looking down outer environemnts until hit global- called scope chain
scope is where can access variables.

variable value if dependent on outer environment, depends on its value when function called, not when it is defined.

function b if nested in a , is not created till a's execution context is executed. ??

## scope, es6, let
scope where variable available in code.
let - new way to use block scoping
during execution phases when created still placed in memory, set undefined, but not allowed to use it until line of code defined.
only inside block where it is defined, e.g. if statements, loop.

## asynchronous callbacks
asynchronous- more than one at a time. engine executes multiple at same time, but javscript is synchronous, how it handles asynchronous events. there are other engines thean javscript engine e.g. http request engine, rendering engine, js engine has hooks to interact with other engines. when asych goes out and make request, other parts of browser runs, while js engine does other things.
Event queue - full of events/notifications other part of browser want to notify js engine of.
e.g. click put to event queue.
when execution stack is empty, then js periodically looks at event queue, processes function if nees to, creases execution context and then executes. appear on execution stack.
asynchronous events are truly about what is happening outside js engine.

function completes, and global code completes before click event
finished function, finished exectuion, click event.

function waitThree(){
  var ms = 3000 * new Date().getTime()
  while(new Date() < ms){}
  console.log("finished function")
}
function clickHandle(){
  console.log('click event')
}
document.addEventListener('click', clickHandle)
waitThree();
console.log("finished execution")

## Types and JS
dynamic typing- dont tell engine what type of data variable holds, figured out while executing. c- users static typing variable must always hold that value type.

## Primitive types
a type of data that represents a single value, not an object.
undefined- indicates lack of existence
boolean- true/false
number - floating point number always some decimal attached to it, only one number type
string - sequence of characters (in c treated sequence characters)
symbol- es6
null - represents lack of existence, but you self set

## operators
special function written syntactically different, typically input are two standard parameters.
+, -, > 
function +(a,b){ ... }
+(3,4); would be inconvenient
3+4 index notation
3 4+ prefix notation, used by older systems/alngs typically

##operator precedence and associativity
operator precedence- which op function called first, higher precedence wins. general mathematics of precedence
associativity- what order function gets called in left to right, right to left, if same precedence.
3+4*5 //23

##Precedence
() grouping
. []member access new(with are list) function call() lr 
 new (without are list)  rl
..++ ..-- postfix increment/decrement
! ~ + - ++ -- typeof void delete await rl 
logical not, bitwise not, unary + unary negation, prefix inc/decrement 
** exponation rl
* / % lr
+ - lr
<< >> >>> lr bitwise left, right, unsigned right shift
< <= > >= in instanceof lr
== != === !== lr
& bitwise and lr
| bitwise or lr
&& logical and lr
|| logical or lr
conditional .. ? .. : .. rl
assignment = += -= **= *= /= %= <<= >>= >>>= &= ^= |= rl
yield .. yield* rl
, lr sequence

var a=2, b=3, c=4;
a=b=c; all 4, as associativity right to left, called first
## Coercion
converting value one type to another
'hello' + 'world'
1 + 2
1 + '2' implicit conversion '12'
## conversion operators
1<2<3 true 3<2<1 true LR false < 1 0<1
Number(false) 0 Number(true) 1

Number(undefined) NaN couldnt convert to number
Number(null) 0
"3" == 3 true
false == 0 true
null == 0 false null<1 true strange errors
"" ==0 ""==false true
strict equality
doesn't try to coerce values
use === by default
Object.is: same primitive values, or refer to same object instance
## existence and booleans
In if statement tries to convert to boolean
Boolean(null), undefined, 0 "" are false
can check for a undefined value with empty value, problem is what if 0 an intentional value?
 if(x || x===0)

 ## default values
var x;
 console.log('hello'+x)
 'hello undefined'
 name = name || 'default'
 'hi' || 'hello' --> 'hi'
 null || 'hello' --> hello
 be careful 0

 ## framework aside
var libraryName='lib1' two library imports, important that var names dont collide, just replace eachother as both brough to same execution context
#<script src='./lib1.js' />
#<script src='./lib2.js' />

window.libraryName = window.libraryName || 'lib2';
checks if already set in global context.
easier to debug as library not entirely there

# objects and functions
very much similar in JS.
objects collections name value pairs, value may be other object.
object: primitive property, object property, function (method)
core object has memory address, references to its properties/methods place in memory. 

var person = new Object();
person['firstname']='tony';
var a ='firstname'
person[a] 'tony'
person.firstname
dot operator, 2nd most preference after groupings()
person.address= new Object();
person.address.street = '111 Main st'

## objects and object literals
var person = {}; ###same as new Object()
var Tony={firstname:'Tony', lastname: 'Simpson'}
function greet(person){
  console.log('hi'+person.firstname)
}
greet(Tony)
greet({firstname:'Mary'})
object literal syntax uses dot, {} clean.


## for loops
for(var i=0; i< a.length; i++)
//i is now global variable


































