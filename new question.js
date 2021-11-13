


var a=[2,4,6,10,8,3]
var  b=[]
for (i of a){
var d=[i,i*2]
b.push(d)
}
console.log(b)

/*output
[ [ 2, 4 ], [ 4, 8 ], [ 6, 12 ], [ 10, 20 ], [ 8, 16 ], [ 3, 6 ] ]*/