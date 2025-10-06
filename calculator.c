#include <stdio.h>
#include <conio.h>

int add(int a,int b){
return a+b;
}
int sub(int a,int b){
return a-b;
}
int mul(int a,int b){
return a*b;
}
int divi(int a,int b){
return a/b;
}
int main()
{
    int num1,num2,choice;
    printf("Enter first number:");
    scanf("%d",&num1);
    printf("Enter second number:");
    scanf("%d",&num2);
    // printf("Enter Your Choice:");
    // scanf("%d",&choice);
    
    
    printf("1.addition \n");
    printf("2.substrction \n");
    printf("3.multiplication \n");
    printf("4.division \n");
    printf("0.exit\n");
    
     printf("Enter Your Choice:\n");
    scanf("%d",&choice);
    
       switch(choice){
        case 1:
        printf("result is = %d :",add(num1,num2));
        break;
        case 2:
        printf("result is = %d :",sub(num1,num2));
        break;
        case 3:
        printf("result is = %d :",mul(num1,num2));
        break;
        case 4:
        printf("result is = %d :",divi(num1,num2));
        break;
        case 0:
        printf("you are exit..");
        break;
       default:
       break;
    }
    
    
    return 0;
}