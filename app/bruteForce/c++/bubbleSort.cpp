#include <stdio.h>
#include <sstream>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

/* Function to print an array */
void printArray(int arr[], int size)
{
    int i;
    for (i = 0; i < size; i++)
        printf("%d ", arr[i]);
    // printf("\n");
}

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
    int i, j;
    for (i = 0; i < n - 1; i++)
    {
        // Last i elements are already in place
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                printArray(arr, n);
                printf(">> Since (%d > %d) then Swap %d <--> %d\n", arr[j], arr[j + 1], arr[j], arr[j + 1]);
                swap(&arr[j], &arr[j + 1]);
            }
            else
            {
                printArray(arr, n);
                printf(">> Since (%d <= %d) then Keep\n", arr[j], arr[j + 1]);
            }
        }
        printf("\n");
    }
}

// Driver program to test above functions
int main(int argc, char **argv)
{
    std::string string_array = argv[1];
    std::vector<int> vect;
    std::stringstream ss(string_array);
    int i;
    while (ss >> i)
    {
        vect.push_back(i);

        if (ss.peek() == ',')
            ss.ignore();
    }
    int arr[vect.size()];
    std::copy(vect.begin(), vect.end(), arr);
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted Array: ");
    printArray(arr, n);
    return 0;
}