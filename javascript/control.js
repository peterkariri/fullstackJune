//this are structures that low us to implement logic to code 
//with control strucutres we make step by step logic on what can be done and what the ;atter is 
/* we have {
    if statements  
    if ... else statements
    nested if ... else statemtns 
    switch statements


} */

    //if statement>>this only executes when a condition is set to truth 

   /*  if its raining carry an umbrella 
    if user is signed up >>log in user  */
//it does not have the false value component 

let weather="Sunny"

if(weather=="Rainy"){
    console.log("carry an umbrella");
    
}

//if ... else {
/* this is an mprovemnt of the if statemtnt to handle the false part of a statment or give 
a default value to usr once no satisfaction is reached     
} */

if(weather=="Rainy"){
    console.log("carry an umbrella");
    
}
else{
    console.log("check out the weather app ");
    
}


let age=79

if(age>=19 && age<=80){
    console.log("User is valid for a Driver's License");
    
}
else{
    console.log("User is Not valid for A Driver's License");
    
}

//nested if else >>this type of if statemetn is used to control logic of more ]than one 
//paramenter >>multiple possiblities
///built a grading system 


let grade="50"

if(grade>=90 && grade<=100){
    console.log("Student has First class Honors ,Upper Division");
    
}
else if (grade>=80 && grade<=89){
    console.log("Student has First class Honors ,Lower Division");

}
else if (grade>=70 && grade<=79){
    console.log("Student has Second class Honors ,Upper Division");

}
else if (grade>=60 && grade<=69){
    console.log("Student has Second class Honors ,Lower Division");

}

else if (grade>=50 && grade<=59){
    console.log("Student has a Pass");

}
//defau;t vslue for anythong below 50 >>failure shou;l;d retake 

else{
    console.log("Student Invalid Marks or Failed ,they should visit the department ");
    
}

//switch statement 
//these statemetns are used to give various cases in a scenario 
//it includes the break statement which allows you to break out of the switch loop when a condition has been met 
//if no break statement ,the execution continues until default value.

/* switch(parameter){
    case1:
    //code for case 1

    break;
    case2:
    //code for case 2

    break

    //...other conditions 

    default:
       // returns a value sether false of the logic or a default placeholder 
} */
let caseDay='Monday'

switch(caseDay){
    case "Monday":
    console.log("today is monday");
    break;
     case "Tuesday":
    console.log("today is tuesday");
    break; 
    case "Wednesday":
    console.log("today is Wednesday");
    break; 
    case "Thursday":
    console.log("today is Thursday");
    break; 
    case "Friday":
    console.log("today is Friday");
    
    default: //handle the false part of a switch case just like the else part in an if or nested if statement
    console.log("its a weekend");
    
}

/* other jumping conditional keywords such as continue which allows a function to continue exectution 
of a foresaid logical loop 
continue and break are used for codnitional programming  */




//loops

//>>this are a mechanism that is used to traverse a data set until a certain condition has been met 

/* loops have three things in common {
    loop initialization (point of origin)>>let ,const ,var
    loop condition>>gives the lenght of the loop (access the limits of the datasets)//comparion operators 
    loop iteration(increment/decrement)>>add or remove a logical computation that allows looping itself(++,--)
}
 */
/* for loop>>iterates trhough items 
 */

for(let i=0;i<=10;i++){
    console.log(i);
    
}


for(let z=0;z<10;z++){
   if(z%2==0){
     console.log(`the number ${z} is even`);
      
   }
   if(z%2==1){
     console.log(`the number ${z} is odd`);
      
   }
   
}

//while oop >>it evalutates and executes a a function or a task when the conditon is met 

let number=2 //initialization

while(number<30){ //condition 
    console.log(number);
     //iteration >>when you miss out the iteration you risk filling the memeory because it executes infinitly 
    number++
}

//do ..while loop  >>similar to the while loop but 
// this always executes a block of code at least once before checking for a condiiton 

let numberDo=500; //initialization 
do{

console.log(numberDo);
numberDo++//iteration

}
while(numberDo<20) //logic


//for .. of loop >>this loop is used to loop through arrays mostly iterating on each item 
//its a n improvement of the for loop without the cumbusome syntax

let fruits=["pineaple",'melon','passion','banana','white-supporter']

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    
}
 for(let fruit of fruits){
    console.log(fruit);
    
} 