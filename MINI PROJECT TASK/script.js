console.log("29 jan");

// // 1. Student Marks Analyzer

// let Student=[
//     {name:"nandani",marks:90,},
//     {name:"dixi",marks:30,},
//     {name:"jensi",marks:55,},
//     {name:"mitali",marks:78,},
// ];
// let result=Student.map((std)=>{
//     console.log(`My name is ${std.name} and Marks is ${std.marks}`)
// });

// console.log("marks above 60 :")
// result=Student.filter((std)=>{
//     if(std.marks>60)
//     {
//         console.log(`${std.marks}`)
//     }
// });

// let total=Student.reduce((total,std)=>
//     total+std.marks,0
// );
// console.log("Total is = ",total);

// let addstudent ={name:"priya",marks:80,};
// let updatedStudents = [...Student, addstudent];

// console.log("Updated Students:", updatedStudents);


// **********************************************************************************************


// // 2. Product Cart System

//  let product=[
//     {name:"abc",price:100,quantity:2},
//     {name:"mno",price:600,quantity:4},
//     {name:"pqr",price:300,quantity:1},
//     {name:"xyz",price:700,quantity:5},
// ];

// let result=product.map((pro)=>{
//     console.log(`product name is ${pro.name} and price is ${pro.price} and quantity is ${pro.quantity}` )
// });

// console.log("product above 500 :")
// let res=product.filter((pro)=>{
//     if(pro.price>500)
//     {
//         console.log(`${pro.price}`)
//     }
// });
// console.log(res);

//  let total=product.reduce((total,pro)=>
//     total+(pro.price*pro.quantity),0
// );
// console.log("Total cart value is = ",total);

// let addproduct ={name:"ghi",price:200,quantity:3};
// let updatproduct = [...product, addproduct];

// console.log("Updat product :", updatproduct);


// **********************************************************************************************


// 3. Employee Management System

// let employee = {
//     id: 101,
//     name: "Nandani Patel",
//     age: 21,
//     address: {
//         state: "Gujarat",
//         city: "Rajkot",
//         pincode: 360004
//     },
//     skills: ["JavaScript", "HTML", "CSS"]
// };

// console.log(employee.address.city);      
// console.log(employee.address.pincode);   

// employee.skills = [...employee.skills, "React", "Node.js"];
// console.log(employee.skills);

// employee.age = 29;
// console.log(employee.age);

// const {name, age} = employee;
// console.log(name); 
// console.log(age); 

// console.log(employee);


// **********************************************************************************************


// 4.Even–Odd Number Dashboard

// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

// let result = arr.filter((d,i)=>d%2!=0);
// console.log("Odd Number is :",result);

// let res = arr.filter((d,i)=>d%2==0);
// console.log("Even Number is :",res);

// let totalsum = arr.reduce((total,arr)=>total+arr,0);
// console.log("Total of Sum is =",totalsum);

// let squre = arr.map((data,index)=>data*data);
// console.log("squre is :",squre);


// **********************************************************************************************


// 5. Student Result Generator

 const Students = [
  { name: "Nandani", marks: 56 },
  {  name: "Priya", marks: 67 },
  {  name: "Dixi", marks: 89 },
  {  name: "Jensi", marks: 30 },
  {  name: "Mitali", marks: 45 }
];

let stu = Students.map((data)=>{
    // let result;
    if (data.marks >= 40)
    {
    data.result = "Pass";
    } 
   else 
    {
    data.result = "Fail";
    }
    return data;
});
console.log(stu);

let passedStudents = Students.filter(
  student => student.result === "Pass"
);

console.log("Passed Students:", passedStudents);


let totalMarks = Students.reduce((sum, student) => {
  return sum + student.marks;
}, 0);

let avgMarks = totalMarks / Students.length;

console.log("Class Average:", avgMarks);

