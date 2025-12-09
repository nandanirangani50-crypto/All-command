#include <iostream>
using namespace std;

void printArray(int arr[], int size) 
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}


void InputArray(int arr[], int size)
{
    cout << "Enter the value at index: ";
    for (int i = 0; i < size; i++)
    {
        cin >> arr[i];
    }
}

void bubbleSort(int arr[], int size) 
{
    for (int i=0; i<size-1; i++) 
    {
        for (int j=0; j<size-i-1; j++)
        {
            if (arr[j]>arr[j + 1])
            {
                swap(arr[j], arr[j+1]);
            }
        }
    }
}

void insertionSort(int arr[], int size) 
{
    for (int i=1; i<size; i++) 
    {
        int key = arr[i];
        int j = i - 1;
        while (j>=0 && arr[j]>key) 
        {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}

void selectionSort(int arr[], int size) 
{
    for (int i=0; i<size-1; i++) 
    {
        int minIndex = i;
        for (int j=i + 1; j<size; j++)
        {
            if (arr[j]<arr[minIndex])
                minIndex = j;
        }
        swap(arr[i], arr[minIndex]);
    }
}

int main() 
{
    int choice, size;

    cout << "Enter number of elements: ";
    cin >> size;

    int arr[size];

    // Call InputArray function
    InputArray(arr, size);

    cout << "Enter 1 for Bubble Sort\n";
    cout << "Enter 2 for Insertion Sort\n";
    cout << "Enter 3 for Selection Sort\n";
    cout << "Enter Your choice: ";
    cin >> choice;

    switch (choice) 
    {
        case 1:
            bubbleSort(arr, size);
            cout << "\nSorted using Bubble Sort: ";
            break;

        case 2:
            insertionSort(arr, size);
            cout << "\nSorted using Insertion Sort: ";
            break;

        case 3:
            selectionSort(arr, size);
            cout << "\nSorted using Selection Sort: ";
            break;

        default:
            cout << "\nYour choice is invalid!";
            return 0;
    }

    printArray(arr, size);
    return 0;
}



