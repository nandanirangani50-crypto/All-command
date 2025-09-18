#include <stdio.h>

int main()
{
    // int a, grade;
    // printf("Enter Your Marks :");
    // scanf("%d",&a);
    
    // if(a>=91){
    //     printf("Your grade ifs A",grade);
    // }
    // else if(a>=71){
    //     printf("Your grade is B",grade);
    // }
    // else if(a>=61){
    //     printf("Your grade is C",grade);
    // }
    // else if(a>=51){
    //     printf("Your grade is D",grade);
    // }
    // else if(a>=41){
    //     printf("Your grade is E",grade);
    // }
    // else{
    //     printf("Your grade is F",grade);
    // }
    
    
    
    
    // int a, grade;
    // printf("Enter Your Marks :");
    // scanf("%d",&a);
    
    // if(a>=91){
    //     grade='A';
    // }
    // else if(a>=71){
    //     grade='B';
    // }
    // else if(a>=61){
    //     grade='C';
    // }
    // else if(a>=51){
    //     grade='D';
    // }
    // else if(a>=41){
    //     grade='E';
    // }
    // else{
    //     grade='F';
    // }
    
    // switch(grade){
    //     case 'A':
    //     printf("Your grade is A.excellent work!");
    // }
    // switch(grade){
    //     case 'B':
    //     printf("Your grade is B.Well done!");
    // }
    // switch(grade){
    //     case 'C':
    //     printf("Your grade is C.Good job!");
    // }
    // switch(grade){
    //     case 'D':
    //     printf("Your grade is D.You passed but you could do better!");
    // }
    // switch(grade){
    //     case 'E':
    //     printf("Your grade is E.increse your efforts!");
    // }
    // switch(grade){
    //     case 'F':
    //     printf("Your grade is F.Sorry you failed!");
    // }
    
    
    
    int score;
    char grade;
    printf("Enter Your Score :");
    scanf("%d",&score);
    
    if(score>=91){
        grade ='A';
    }
    else if(score>=71){
       grade ='B';
    }
    else if(score>=61){
        grade ='C';
    }
    else if(score>=51){
        grade ='D';
    }
    else if(score>=41){
        grade ='E';
    }
    else{
        grade ='F';
    }
    
    
    printf("Your grade is. %c \n", grade);
    
    if (grade >= 'A' && grade <= 'E'){
        printf("Congratulations! You are eligible for the next level.\n");
    }else{
        printf("Please try again next time.\n");
    }
    
    return 0;
}