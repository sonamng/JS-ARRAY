



var elements=[1,2,3,4,5,6,7]
var odd_numbers=0;
var even_numbers=0;
for(var i of elements){
if(i%2 ===0){
even_numbers+=1
}
else{
odd_numbers+=1
}
}
console.log(odd_numbers,"odd");
console.log(even_numbers,"even");


/*output throw
4 'odd'
3 'even'*/