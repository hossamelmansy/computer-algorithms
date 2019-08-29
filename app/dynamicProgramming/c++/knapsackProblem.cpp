/* A Naive recursive implementation of 0-1 Knapsack problem */
#include <stdio.h>
#include <sstream>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

// A utility function that returns maximum of two integers
int max(int a, int b) { return (a > b) ? a : b; }

// Returns the maximum value that can be put in a knapsack of capacity W
int knapSack(int W, int wt[], int val[], int n)
{
    // Base Case
    if (n == 0 || W == 0)
        return 0;

    // If weight of the nth item is more than Knapsack capacity W, then
    // this item cannot be included in the optimal solution
    if (wt[n - 1] > W)
        return knapSack(W, wt, val, n - 1);

    // Return the maximum of two cases:
    // (1) nth item included
    // (2) not included
    else
        return max(val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1),
                   knapSack(W, wt, val, n - 1));
}

// Driver program to test above function
int main(int argc, char **argv)
{
    std::string string_array1 = argv[1];
    std::string string_array2 = argv[2];
    std::vector<int> vect1;
    std::vector<int> vect2;
    std::stringstream ss1(string_array1);
    std::stringstream ss2(string_array2);
    int i1;
    int i2;
    while (ss1 >> i1)
    {
        vect1.push_back(i1);

        if (ss1.peek() == ',')
            ss1.ignore();
    }
    int val[vect1.size()];
    std::copy(vect1.begin(), vect1.end(), val);
    while (ss2 >> i2)
    {
        vect2.push_back(i2);

        if (ss2.peek() == ',')
            ss2.ignore();
    }
    int wt[vect2.size()];
    std::copy(vect2.begin(), vect2.end(), wt);

    int W = atoi(argv[3]);
    int n = sizeof(val) / sizeof(val[0]);
    printf("%d", knapSack(W, wt, val, n));
    return 0;
}
