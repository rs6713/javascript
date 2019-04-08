obj={};
for(let i of a){
  obj[i]=true;
}
Object.keys(obj)


var arr=[];
for(var i=0; i<5; i++){arr.push(function(a){return a*i})}
//all return a*5, i ends on value 5.
arr[3](2)//10, 

for(let i=0; i<5; i++){arr.push(function(a){return a*i})}
arr[2](2)// new i each time, separate var ref, so 4
