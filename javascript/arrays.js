/* //array methods >>this are methods used to simply execution of operations on arrays 
//alterating methods >>we use this to change ,add remove elemetns in an array 
//at the end 
push()>>refers to adding an element to the end of an array 
pop()remove an element at the end of an array
//beginning of an array 
shift()>>remove an element at the beginning of an array 
unshift()>>add a new element at the beginning of an array 


/includes()>>loopd throguh the array to return either a true or false if an element if foiund in the array

join()>>used to tranform a an array into strings  ,you use a delimeter as well (seperator >>,,.,character ) */

let fruits=["apple",'mango','blueberry','dates','orange']
fruits.push('banana','watermelon','raspberry')
console.log(fruits);

let newFruit=fruits.pop()

console.log(newFruit);

console.log(fruits);

let frontNew=fruits.unshift("whiteSupporter","laquads")

console.log(fruits);

fruits.shift()
console.log(fruits);


let arraySentence=fruits.join( " ,").toUpperCase()

console.log(arraySentence);


//iteration methods