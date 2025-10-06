// #include <stdio.h>

// int main() {
//     char str[50];
//     int i, length = 0, j = 0;

//     printf("Enter any character: ");
//     scanf("%s", str);

//     while (str[length] != '\0') {
//         length++;
//     }

//     for (i = 0; i < length / 2; i++) {
//         if (str[i] != str[length - i - 1]) {
//             j = 1;
//             break;
//         }
//     }

//     if (j == 0) {
//         printf("The given string is a Palindrome.\n");
//     } else {
//         printf("The given string is NOT a Palindrome.\n");
//     }

//     return 0;
// }




#include <stdio.h>

int main() {
    char str[100];
    int freq[256] = {0}; 
    int i = 0;

    printf("Enter any string: ");
    scanf("%s", str); 

    while (str[i] != '\0') {
        freq[(int)str[i]]++;
        i++;
    }

    printf("Frequency of each letter:\n");
    for (i = 0; i < 256; i++) {
        if (freq[i] > 0) {
            printf("%c => %d\n", i, freq[i]);
        }
    }

    return 0;
}

