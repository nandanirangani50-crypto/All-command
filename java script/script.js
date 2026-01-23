// 1. the Fibonacci series
function fibonacci(n) 
{
    let a = 0, b = 1;
    for (let i = 1; i <= n; i++) 
    {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}
fibonacci(5);

// 2. sum of its digits.
function sum(num) 
{
    let sum = 0;
    // if (num < 0) {
    // }
    while (num > 0) {
        sum += num % 10;     
        num = (num - (num % 10)) / 10; 
    }
    return sum;
}
console.log(sum(123)); 



// 3. Palindrome
function isPalindrome(num) 
{
    let original = num;
    let rev = 0;
    while (num > 0) {
        let digit = num % 10;       
        rev = rev * 10 + digit;   
        num = (num - digit) / 10;   
    }
    if (original === rev) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}
isPalindrome(969);  


// 4. factorial.
let mul=1;
function factorial(num)
{
    for(let i=num; i>0; i--)
    {
        mul=mul*i;
    }
}
factorial(4);
console.log("factorial = ",mul);

// 5. reverse.

function reverseNum(num) {
    let str = num.toString();
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
console.log(reverseNum(123));






