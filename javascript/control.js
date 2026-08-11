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