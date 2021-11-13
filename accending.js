


var a=[1,65,4,7,6,8,9]
i=0
while (i<a.length){
     j=0
     while(j<a.length){
          if(a[i]<a[j]){
               temp=a[i]
               a[i]=a[j]
               a[j]=temp
          }
          j++
     }
     i++
}console.log(a)



// b=[]
// i=a.length-1
// while(i>=0){
//      b.push(a[i])
//      i--
// }
// console.log(b)