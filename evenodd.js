


// var a=[12,13,2,15,5,8,7,9]
// for(i of a){
// if(i%2==0){
//      console.log(i,"even number")
// }
// else{
//      console.log(i,"odd")
// }
// }

// var a=[12,13,2,15,5,8,7,9]
// var s=[]
// for(i of a){
// if(i%2==0){
// s.push(i)
// i++
// }
// }
// console.log(s,"even")



var elements=[1,2,3,4,5]
var elements=["sonam","priyanka"]
var sum_odd_numbers=0
var sum_even_numbers=0
for(var i of elements){
if(i%2===0){
sum_even_numbers+=i
}
else{
sum_odd_numbers+=i
}
}
console.log(sum_odd_numbers,"odd_num");
console.log(sum_even_numbers,"even_num");