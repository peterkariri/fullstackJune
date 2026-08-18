//strings methods >>these are methods that are used to manipulate and work on sentences and nay string data type 
//this are examples of string methods 

//case change 

/* tolowerCase>>used to transform a string to a lower case 
toUppercase >>used to transform a string to toUppercase
use case >>when collecting user input in fomrs ,or data entries where you need consistency of data 
search inputs,firstnames ,emails 
*/

let userInput="heLLo i am LeanriNG jAVASCript"

let lowerUserInput=userInput.toLowerCase();

console.log(lowerUserInput);


let upperUserInput=userInput.toUpperCase();

console.log(upperUserInput);

//length of a string 
//to check the lenght we use the .lenght method and in this case we chain it with the varibale name ofthe string 
//the lenght method also counts the whitespaces in the string >>and it counts for 1 

let stringLength=userInput.length
console.log(stringLength);

//split >>this is used to split a string into an array with delimeters (seprator)
//why should i split a stirng intpo an array >>when you want to capitalixe a letter of every word ayt index 0 
//and not all the words 
/* if i want to split them into letters i have a sinlge seperator ,if i want words i have a whote space or a 
character  */

let splitSentence=userInput.split('')
console.log(splitSentence);

let output=splitSentence[0].toUpperCase()

console.log(output);



//reverse
//join