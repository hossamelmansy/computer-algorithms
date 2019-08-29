#include <stdio.h>
#include <sstream>
#include <iostream>
#include <string>
#include <vector>
using namespace std;

// returns value of poly[0]x(n-1) + poly[1]x(n-2) + .. + poly[n-1]
int horner(int poly[], int n, int x)
{
    int result = poly[0]; // Initialize result
    printf("Result = list[0] = %d\n", result);

    // Evaluate value of polynomial using Horner's method
    for (int i = 1; i < n; i++)
    {
        printf("Result = (prevResult * x) + list[%d] = (%d * %d) + %d = ", i, result, x, poly[i]);
        result = result * x + poly[i];
        printf("%d\n", result);
    }

    return result;
}

// Driver program to test above function.
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
    int poly[vect.size()];
    std::copy(vect.begin(), vect.end(), poly);
    int x = atoi(argv[2]);
    int n = sizeof(poly) / sizeof(poly[0]);
    printf("\nResult = %d\n", horner(poly, n, x));
    //cout << "Value of polynomial is " << horner(poly, n, x) << endl;
    return 0;
}
