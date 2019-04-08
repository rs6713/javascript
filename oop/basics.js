// ES6 SYNTAX using classes is syntax sugar, more efficient, same underlying code though
//almost everything is an object, there are number, string boolean primitives but can still 
//use some methods on them

const s = "Hello";
console.log(s.toUpperCase())//javascript wraps strings to allow methods behind the scenes

const s2 = new String("Hello")
console.log(typeof s)//string
console.log(typeof s2)//object

console.log(window)//parent window of everyhting, dom
window.alert(1);
alert(1)//as parent could just call

console.log(navigator.appVersion)//system using, navigator is child window but thats default global ibj

const book1={title:"nook on",
getSummary:function(){
  return `${this.title} was written`
}

}//object literal
console.log(book1)
console.log(book1.title)
console.log(book1.getSummary())
console.log(Object.values(book1))//Object.keys(), Object.items()

//dont want to create same style object multiple times, constructor using function
function Book(title,author){
  console.log("initialised")
  this.title=title,
  this.author=author,
  this.getkSummary=function(){
    return `${this.title} was written`
  }
}
const book1=new Book("book 1", "me"); //instantiate an object

//Should use prototype method instead of putting a method directly in the constructor
function Book2(title,author){
  console.log("initialised")
  this.title=title,
  this.author=author
}

Book2.prototype.getSummary=function(){
  return `${this.title} was written`  
}
var book2=new Book('Book 2', 'you')
console.log(book2)//now function not included on book instance, stored in proto

//getAge
Book.prototype.getAge=function(){
  const years= new Date().getFullYear - this.year;
  return `${this.title} is ${years} old`
}

//revise year
Book.prototype.revise = function(newYear){
  this.year=newYear;
  this.revised=true;
}

//inheritance
function Magazine(title,author, year, month){
  Book.call(this, title, author, year);//only inherits methods/properties of object, not prototypes
  this.month=month;
}
const mag1= new Magazine('Mag 1', 'John', 2018, 11)
console.log(mag1.getSummary())//error

//inherit prototype methods need to add another line
Magazine.prototype= Object.create(Book.protytype)
const mag2= new Magazine('Mag 1', 'John', 2018, 11)
console.log(mag2.getSummary())//...

//Use magazine constructor, changes prototype magazine constrctor to magazine from book
Magazine.prototype.constructor = Magazine;

//Object of protos
const bookProtos = {
  getSummary: function(){
    return `${this.title} was written`  
  },
  getAge:function(){
    const years= new Date().getFullYear - this.year;
    return `${this.title} is ${years} old`
  }
}

//create object
const book1 = Object.create(bookProtos)
book1.title='Book 1';
book1.author='john doe';

const book2 = Object.create(bookProtos, {
  title: {value: "book one"}.value,
  author:{value:"me"}
})

// ES6 Classes, same implementation, just easier way to write
class Book{
  constructor(title,author,year){
    this.title=title
    this.author=author
  }
  //getSummary is auto added as a prototype
  getSummary(){
    return `${this.title} was written`  
  }
  
  static topBookStore(){
    return 'Waterstones'
  }
}
const book1 = new Book('book one', 'john')

//static method-dont have to instantiate it
Book.topBookStore();

//subclasses - magazine
class Magazine extends Book{
  constructor(title, author, year, month){
    super(title, author, year)
    this.month=month
  }
}
const mag1= new Magazine('he', "me", 2018, 11)
mag1.getSummary();
//inheritance is much easier dont have to add additional prototype inheritence lines



