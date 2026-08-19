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
//forEach()>>this is a high order function that is used to loop through an array iterating through every element 
let newForEach=fruits.forEach(function(fruit){
    console.log(fruit);
    //any other logical operations
    
}

)
//map method>>it return a new array from an existing array by altering the array to give a new one //looping trhough every iiteration

let numbers=[1,4,5,2000,2345454,645,232,2434345]
let value=numbers.map(number =>{
     return  number*2
})
console.log(value);
console.log(numbers);


let persons=[
    {name:'Peter',score:99},
    {name:'Velter',score:120},
    {name:'Wencellious',score:110},
    {name:'Trizzah',score:112},
    {name:'Liz',score:1000},
]
let names=persons.map((person)=>{
   let persona=person.name
   let newOne=persona
   return newOne 
})
console.log(names);

let filter=persons.filter(person=>{
     return person.score %2 ===0
})
console.log(filter);
//find >>trizzah
//replace>>velter
//reverse>>liz
//slice>>liz
//splice>>wencellious