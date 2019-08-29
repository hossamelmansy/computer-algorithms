import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--sequence1')
parser.add_argument('--sequence2')
args = parser.parse_args()


def lcs(X, Y, m, n):
    if m == 0 or n == 0:
        return 0
    elif X[m-1] == Y[n-1]:
        return 1 + lcs(X, Y, m-1, n-1)
    else:
        return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n))


# Driver program to test the above function
X = args.sequence1
Y = args.sequence2
print "Length of LCS is ", lcs(X, Y, len(X), len(Y))
