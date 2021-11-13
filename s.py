

# a=[2,3,4,5,6,7]
# i=0
# c=[]
# while i<len(a):
#      b=[a[i],a[i]*2]
#      c.append(b)
#      i=i+1
# print(c)


# a=[1,2,3,4,5,6,7]
# i=0
# b=[]
# while i<len(a):
#      b.append(a[i])
#      i=i+2
# print(b)

# a=[1,2,3,4,5,[6,7,8],9]
# i=0
# sum=0
# for i in range(len(a)):
#      n=a[i]
#      if type(n)==list:
#           for j in range(len(n)):
#                m=n[j]
#                sum=sum+m
#      else:
#           sum=sum+n
# print(sum)



# a={"a":12,"b":4,"c":7,"d":9,"r":5}
# key=[]
# vlues=[]
# for i in a:
#      key.append(i)
#      vlues.append(a[i])
# print(key)
# print(vlues)


name=input("enter the name::")
i=0
count=0
while i<len(name):
     a=("a","e","i","o","u")
     if name[i] in a:
          count=count+1
     i=i+1
print(count,"vowel")




# n=input("enter the number:")
# i=0
# count=0
# count1=0
# while i<len(n):
#      a=("a","i","o","u","e")
#      if n[i] in a:
#           count=count+1
#      if n[i] not in a:
#           count1=count1+1
#      i=i+1
# print(count,"vowel")
# print(count1,"consonent")



# name=input("enter the name::")
# i=0
# a=len(name)
# if a%2==0:
#      print(a,'even')
# else:
#      print(a,'odd')
# i=i+1

# num=int(input("enter the number:"))
# a=(num%10)
# b=(num//10)%10
# c=(num//100)%10
# d=(num//1000)%10
# number=(a*1000)+(b*100)+(c*10)+(d*1)
# if num<=1000:
#      print(number)




