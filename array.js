let myArr = [1,2,3,4,5,6,7,8]
myArr.push(9)

for(let i= 0; i<myArr.length; i++){
    console.log(myArr[i])
}

let som = 0;
for(let i = 0;i<3; i ++){
    som += myArr[i]
}
console.log(som)

console.log (myArr.pop() + myArr.pop())