// #include <stdio.h>

// int main()
// {
//     char str[100];
//     char *ptr;
//     int length = 0;
    
//     printf("Enter a String: ");
//     scanf("%s",&str);
    
//     ptr=str;
    
//     while (*ptr != '\0'){
//         length++;
//         ptr++;
//     }
    
//     printf("Length of the string=%d\n", length);

//     return 0;
// }



#include <stdio.h>
int cube(int num) {
    return num*num*num;
}

int main() {
    int rows, cols;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);
    printf("Enter the number of columns: ");
    scanf("%d", &cols);

    int arr[rows][cols];

    printf("Enter elements of the 2D array:\n");
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            printf("Element of [%d][%d]: ", i, j);
            scanf("%d", &arr[i][j]);
        }
    }

    printf("\nCube of all elements:\n");
    for(int i = 0; i < rows; i++) {
        for(int j = 0; j < cols; j++) {
            printf("%d\t", cube(arr[i][j]));
        }
        printf("\n");
    }

    return 0;
}



