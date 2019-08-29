import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--n')
parser.add_argument('--k')
args = parser.parse_args()


def binomialCoeff(n, k):

    if k == 0 or k == n:
        return 1

    # Recursive Call
    return binomialCoeff(n-1, k-1) + binomialCoeff(n-1, k)


# Driver Program to test ht above function
n = int(args.n)
k = int(args.k)
print "Value of C(%d,%d) is (%d)" % (n, k, binomialCoeff(n, k))

# This code is contributed by Nikhil Kumar Singh (nickzuck_007)
