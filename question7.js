

// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// // sample Output 9:
// for (i in numbers){
// }
// i++
// console.log(i)




const n=require("readline-sync")
var name=n.question("enter the name:")
if (name.includes("ing")){
     console.log(name+"ly")
}
else if (name.includes("ly")){
     console.log(name+"ing")
}else{
     console.log("not chenge")
}