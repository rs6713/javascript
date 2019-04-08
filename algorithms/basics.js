/*
Often start with brute force, then experiment with different data structures
Finally try JS one liners, inbuilt
*/

/********** REMOVE ARRAY DUPLICATES */

let a = [1,2,5,2,1,8]
//do I need to preserve order?

//complexity O(n^2)
//brute force, create another array, 
//each elem a check if in b, if not push into b
let b=[];
let len = a.length;//not calculated each time
// using indexes not popping as that would be very costly
for(let i=0; i<len;i++){
  if (b.indexOf(a[i]===-1)){
    b.push(a[i])
  }
}

//complexity quicksort O(nlogn)
a.sort();
let _tmp;
for(let i=0;i<len;i++){
  if(a[i]!== _temp){
    b.push(a[i])
    _temp=a[i]
  }
}

//object (replacement for hash table) O(n)
obj={};
for(let i of a){
  obj[i]=true;
}
Object.keys(obj)

// O(n)
let bSet= [... new Set(a)]
