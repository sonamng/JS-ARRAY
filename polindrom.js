

var a=['m','o','m']
var b=[]
for(var i=a.length-1;i>=0;i--){
b.push(a[i])
}
var c=0
for(var j=0;j<a.length;j++){
if (b[j]===a[j]){
c++
}
}
if (c==a.length){
     console.log(b,"polindrom")
}else{
     console.log(b,"not polindrom")
}

