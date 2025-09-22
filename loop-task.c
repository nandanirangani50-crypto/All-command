#include <stdio.h>

int main()
{
    // char ch='a';
    // do{
    //     printf("%c",ch);
    //     ch=ch+3;
    // }while(ch <='z');

   
    
    
    
    // int num,first=0,last;
    // printf("Enter Your digits :");
    // scanf("%d",&num);
    
    // while(num>0){
    //     last=num%10;
    //     first=first+last;
    //     num=num/10;
    // }
    // printf("sum of all digits :%d",first);
  
   
   

    
    int num,sum,m,n;
    printf("Enter Your digits:");
    scanf("%d",&num);
    m=num;
    
    while(m>10){
        m=m/10;
    }
        n=num%10;
        sum=m+n;
    
    printf("sum of first digit and last digit = %d\n",sum);
    
     return 0;
     
}