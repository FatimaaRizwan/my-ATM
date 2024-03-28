#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 50000;
let myPin= 10101;

let answer = await inquirer.prompt([
    {message:"Enter your pin", name:"pin", type:"number"
    }
]);

//conditions
if (answer.pin === myPin){
    let operationAns=await inquirer.prompt([{
        name:"operation", type:"list", message:"What would you like to do", choices:["check balance", "withdraw amount"]
    }]);
    console.log(operationAns);

    if (operationAns.operation==="withdraw amount"){
        let amountAns = await inquirer.prompt([{
            name:"amount", message:"Enter the amount", type:"number"
        }]);
     if(amountAns.amount>myBalance){
        console.log("You have insufficient balance");
     }else{
        myBalance-= amountAns.amount;

        console.log("Your balance remained is:"+ myBalance)
        
    }
 } else if(operationAns.operation==="check balance"){
            console.log(`your balance is ${myBalance}`);
    };

} else {
    console.log("Incorrect pin");
}