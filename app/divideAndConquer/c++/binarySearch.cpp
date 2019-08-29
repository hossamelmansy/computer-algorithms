// C++ program to implement recursive Binary Search
#include <stdio.h>
#include <sstream>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
int binarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l) / 2;

        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);

        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, r, x);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

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
    // int arr[] = {100, 2, 3, 4, 10, 40, 50, 60, 70, 80, 90};
    // int x = 60;
    int x = atoi(argv[2]);
    int n = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, 0, n - 1, x);
    (result == -1) ? cout << "Element is not present in array"
                   : cout << "Element is present at index " << result;
    return 0;
}
