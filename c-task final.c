// #include <stdio.h>

// int main() {
//     char c;

//     printf("Enter a character: ");
//     scanf(" %c", &c);

//     switch(c) {
    
//         case 'a':case 'e': case 'i': case 'o': case 'u':
//         case 'A': case 'E': case 'I': case 'O': case 'U':
//             printf("The character is a vowel.\n");
//             break;

     
//         default:
//             if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
//                 printf("The character is a consonant.\n");
//             } else {
//                 printf("The character is not a letter.\n");
//             }
//     }

//     return 0;
// }


// #include <stdio.h>

// int main() {
//     int arr[50], n, min;

//     printf("Enter the number of elements: ");
//     scanf("%d", &n);

//     printf("Enter %d elements:\n", n);
//     for(int i = 0; i <= n; i++) {
//         scanf("%d", &arr[i]);
//     }

//     min = arr[0];

//     for(int i = 1; i <= n; i++) {
//         if(arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     printf("The smallest element is: %d\n", min);

//     return 0;
// }



// #include <stdio.h>

// int reverseNum(int num) {
//     int rev = 0;

//     rev += (num % 10) * 100;   
//     num /= 10;

//     rev += (num % 10) * 10;    
//     num /= 10;

//     rev += num;                
//     return rev;
// }

// int main() {
//     int no, reversed;

//     printf("Enter a 3-digit of the number: ");
//     scanf("%d", &no);


//     if (no < 100 || no > 1000) {
//         printf("Please enter a valid number.\n");
//         return 1;
//     }

//     reversed = reverseNum(no);

//     printf("Reversed number: %d\n", reversed);

//     return 0;
// }


// #include<stdio.h>
// int main(){
//     int arr[50],n;
//     int *ptr;
    
//     printf("Enter the Element of the numbers:");
//     scanf("%d",&n);
    
//     printf("Enter %d elements:\n",n);
//     for(int i=0;i<n;i++){
//         // printf("\n");
//         scanf("%d",&arr[i]);
//     }
//     ptr=arr;
    
//       printf("The square of each element is :\n");
//     for(int i=0;i<n;i++){
//         printf("%d",(*ptr+i)*(*ptr+i));
//     }
   
//      return 0;
// }


// #include <stdio.h>

// int main() {
//     int arr[100],n;
//     int *p = arr;

//     printf("Enter the elements of number:");
//     scanf("%d",&n);
    
//     for(int i = 0; i < n; i++)
//         scanf("%d", p + i);

//     for(int i = 0; i < n; i++)
//         *(p + i) *= *(p + i);  // Square each element

//     printf("Squared elements:\n");
//     for(int i = 0; i < n; i++)
//         printf("%d ", *(p + i));

//     return 0;
// }



#include<stdio.h>
int main(){
    int row=5;
    int num=10;
    
    for(int i=1; i<=row; i++){
        for(int j=1; j<=i; j++){
            printf("%d ", num * num);
        }
        num-=1;
        printf("\n");
    }
    return 0;
}



