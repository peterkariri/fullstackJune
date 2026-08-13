let initialBalance = 20000;
let threshold = 1000;
let fixed = 500;
let iterations = 0;

while (initialBalance > threshold) {
    initialBalance -= fixed;
    iterations++;
    console.log(`Iteration ${iterations}: Remaining balance = ${initialBalance}`);

}

console.log(initialBalance);
console.log(iterations);

//password manager 
//the initializations 
//the user password=''
//the correct password="dummy password"
//the attempts 
//maximum attempts

let userPassword=""
let sysPassword="4491"
let maximumAttempts=3
let attempts=0

while(userPassword!==sysPassword && attempts<maximumAttempts){
            //checking password
            userPassword='4491'
            attempts++

            if(userPassword==sysPassword){
                console.log("transaction successful");
                
            }
            else if (attempts<maximumAttempts){
                console.log(`you have attempt ${attempts} `);
                
            }
            else{
                console.log('too many attempts ,Account blocked');
                
            }


            //checking attepmts 
}