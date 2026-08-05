/* what are data types >>data types are used to store and efine the type of data
in a system 
in javascript we have two types of data {
    primitive (immutable)>>they cannot change >>it containes elements of similar format only
    non-primitive data types (mutable)>>contains elements of mixed racials 
     can be changed to have various data types in them 

}
PRIMITIVE DATA TYPES 
they include {
    strings
    number 
    booleans
    undefined
    NaN

}
NON PRIMITIVE DATA TYPES {
    ARRAYS
    FUNCTIONS
    OBJECTS
    
} */

    //STRING>>A STRING IS A SERIES OF CHARACTERS THAT FORM A WORD OR A SENTENCE 
   /*  THEY are enclosed and defined in three ways {
        using single quotes 
        using double quotes
        using backticks
    } */

        let sentenceOne="today is Tuesday"

        console.log(sentenceOne);
        
        let sentenceTwo='tomorrow is Wednesday'
        console.log(sentenceTwo);
        
        let sentenceThree=`Friday is a holiday`

        console.log(sentenceThree);

        //number

        let age=45//number(int)

        let average=10.5

        let agetwo="45" //string
        
      if(age===agetwo){
        console.log('hurray');
        
      }
      else{
        console.log("nope");
        
      }

      //boolean>>this referes to either a truth or a false (0,1)
      //use cases >>user authetication 
      let success=true;

      if(success){
        console.log("Log in successful proceed to dashboard");
        
      }
      else{
        console.log('invalid credentials');
        
      }

     /*  undefined>>this is a critical data type that is left without a value  
      either tp be filled later or to handle errors 
      their is no assignment of a varible value in the undefined data type
      */

      let fullname;

      console.log(fullname);
      
      //null>>it is used to handle null values such as the ones on pos systems 

      let paymentId=null;

      /* NaN>>used to handle context that 
      is not a number in parameters that requires numbers
      in fomrs that takeint ID,SSN,HUDUMA NUMBER 

      IF INCASE A USER INPUTS A CHARACTER THAT IS NaN AN error is thrown to use only numbers 

      */
    /*  let idNumber=NaN;

     if(!idNumber){
        console.log('tis is correct');
        
     } */
    //to check the type of data tyoe we iuse typeof method and 
    // the name of the data type in bracktets
    console.log(typeof(paymentId));
      console.log(typeof(success));
    
      //arrays >>this refers to agroup or related sata ,
     /// arrays are instantiated form index zero 
/*       arraysare defined in two ways {
        using square bracket method

        let fruits=['mangoes','bananas','pineapple','strawberry',12,true]


        using the array constructor(new Array())

        let fruitTwo=new Array('mangoes','bananas','pineapple','strawberry')

        //multi-dimensinal arrya

        //we nest an array inside an array 

      } */
             let vehicle=['Subaru',['Hilux','Mark X',"premio",'Vitz'],'Tesla','Honda','Isuzu','Audi']


             console.log(vehicle[1][1]);
             

             //objects>>these are a storage data types that offers key value pair methond when it comes to storing data and it 
             //allows one to retrive these data via the dot notation for generic use and the square brackets when you want to change the values 
             //we can have nexted objects and also have object inside arrays  whic helps in looping as a forma of storage 
             //objects are defined by the curly brackets 
             //the key -value pairs ae seperated via a full colon 

 //single object with key and value pairs seperated via commas and only the last key value pair does not have a comma 
 //if you want to return object data chained by string sentences we use backticks as a method of string concatenation and interpolation 
 //we use the dollar sign to embed the object with in and the curly brackets 
             let student={
              name:'Peter Njuguna',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             }
             
             console.log( `The student named ${student.name} enrolled in a course called ${student.course} 
              in the year ${student.year} set for a duration 
              of ${student.duration}
              `);
             
             //array of objects 
             let eldohubStudent=[
              {
              name:'Peter Njuguna',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'Trizzah',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'Neema',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'Velter',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'Liz',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:'  Wencellious',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             },
             {
              name:' Radion',
              course:'ML,DATA ENGINEERING',
              year:2026,
              isPaid:true,
              duration:'12 months'
             }
             ]



               
             //functions>>
