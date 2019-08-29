#include "bits/stdc++.h"
using namespace std;

int search(char *pat, char *txt)
{
    int M = strlen(pat);
    int N = strlen(txt);
    int output = -1;

    /* A loop to slide pat[] one by one */
    for (int i = 0; i <= N - M; i++)
    {
        int j;

        /* For current index i, check for pattern match */
        for (j = 0; j < M; j++)
        {
            if (txt[i + j] != pat[j])
            {
                break;
            }
        }

        // if (j == M) // if pat[0...M-1] = txt[i, i+1, ...i+M-1]
        //     cout << "Pattern found at index "
        //          << i << endl;
        if (j == M)
        {
            output = i;
            printf("%s", std::string(i, ' ').c_str());
            printf("%s\n", pat);
            printf("%s", std::string(N - M - i, '|').c_str());
            return output;
        }

        printf("%s", std::string(i, ' ').c_str());
        printf("%s\n", pat);
        printf("%s", std::string(N - M - i, '|').c_str());
    }

    return output;
}

// Driver Code
int main(int argc, char **argv)
{
    char txt[] = "AABAACAADAABAAABAA";
    char pat[] = "AABA";
    printf("%s\n", argv[1]);
    int output = search(argv[2], argv[1]);
    if (output >= 0)
    {
        printf("Found at index: %d", output);
    }
    else
    {
        printf("Not Found");
    }
    //search(pat, txt);
    return 0;
}