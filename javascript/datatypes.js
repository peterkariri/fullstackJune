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
    