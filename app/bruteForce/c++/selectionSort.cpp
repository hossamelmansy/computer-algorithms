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
}

void selectionSort(int arr[], int n)
{
    int i, j, min_idx;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < n - 1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        // UI: print two empty lines but not the firsr line
        if (i != 0)
        {
            printf("\n");
        }
        printArray(arr, n);

        for (j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[min_idx])
            {
                min_idx = j;
            }
        }
        printf(">> Minimum: %d || Swap %d <--> %d\n", arr[min_idx], arr[min_idx], arr[i]);

        // Swap the found minimum element with the first element
        swap(&arr[min_idx], &arr[i]);
        // printArray(arr, n);
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
    selectionSort(arr, n);
    printf("\nSorted Array: ");
    printArray(arr, n);
    return 0;
}