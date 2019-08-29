// C++ program to find sum of array
// elements using recursion.
#include <stdio.h>
#include <sstream>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

// Return sum of elements in A[0..N-1]
// using recursion.
int findSum(int A[], int N)
{
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}

// Driver code
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
    int N = sizeof(arr) / sizeof(arr[0]);
    printf("%d", findSum(arr, N));
    return 0;
}
