// let temperature = Number(prompt("Enter the temperature"));
// if(temperature > 30)
// {
//     console.log("Temperature is :",temperature);
// }
// else
// {
//     alert("The wether is pleasant.");
// }


// let uname = prompt("Enter Your Username :");
// let pass = prompt("Enter Your Password");
// if(uname !="" && pass !="")
// {
//     console.log("login successfully !");
// }
// else
// {
//     console.log("login fail !");
// }


// let marks = prompt("Enter Your Marks :");
// if(marks >=80 && marks <=100)
// {
//     alert("Your Grade Is A");
// }
// else if(marks >=60 && marks <80)
// {
//     alert("Your Grade Is B");
// }
// else if(marks >=40 && marks <60)
// {
//     alert("Your Grade Is C");
// }
// else if(marks >=0 && marks <40)
// {
//     alert("You Are failed !");
// }
// else
// {
//     alert("Invelid Marks !");
// }



// let Num1 = Number(prompt("Enter 1st number :"));
// let Num2 = Number(prompt("Enter 2nd number :"));
// if(Num1 > Num2)
// {
//     console.log("Number 1 is Larger");
// }
// else if(Num1 < Num2)
// {
//     console.log("Number 2 is Larger");
// }
// else
// {
//     console.log ("Both Number Is Equal");
// }



// let num = Number(prompt("Enter Number Beetween 1 to 7"));

// switch(num){
//     case 1:
//         alert("Monday");
//         break;

//         case 2:
//         alert("Tuesday");
//         break;

//         case 3:
//         alert("Wednesday");
//         break;

//         case 4:
//         alert("Thursday");
//         break;

//         case 5:
//         alert("Friday");
//         break;

//         case 6:
//         alert("Saturday");
//         break;

//         case 7:
//         alert("Sunday");
//         break;

//         default:
//             alert("Invelid number");

// }



// let balance = 10000; 

// let withdraw = prompt("Enter withdrawal amount:");

// if (withdraw <= balance && withdraw >0) 
//   alert("Withdraw successfull");

// else {
//   alert("Insufficient balance");
// }


// let bill = Number(prompt("Enter total bill amount:"));

// if (bill >= 500)  
// {
// alert("Final Amount: " + (bill - bill * 0.2));
// }
//  else if (bill >= 300) 
// {
//   alert("Final Amount: " + (bill - bill * 0.1));
// }
//  else
// {
//   alert("Final Amount: " + bill);
// }


// let units = Number(prompt("Enter units consumed:"));
// let bill = 0;

// if (units <= 50) 
// {
//   bill = units * 2;
// } else if (units <= 100) {
//   bill = (50 * 2) + (units - 50) * 3;
// } else {
//   bill = (50 * 2) + (50 * 3) + (units - 100) * 5;
// }
// alert("Total Electricity Bill: " + bill);



// let distance = Number(prompt("Enter distance in km:"));
// let fare = 0;

// if (distance <= 5) {
//   fare = distance * 10;
// } else if (distance <= 10) {
//   fare = (5 * 10) + (distance - 5) * 8;
// } else {
//   fare = (5 * 10) + (5 * 8) + (distance - 10) * 6;
// }

// alert("Total Ride Fare: " + fare);




let choice = prompt("Enter your choice (1/2/3):");

let price;

switch (choice) {
  case "1":
    price = 200;
    alert("You selected Pizza and Price is: ₹200");
    break;

  case "2":
    price = 100;
    alert("You selected Burger and Price is: ₹100");
    break;

  case "3":
    price = 80;
    alert("You selected Sandwich and Price is: ₹80");
    break;

  default:
    alert("Invalid choice!");
}

