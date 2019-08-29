import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--values')
parser.add_argument('--weights')
parser.add_argument('--weight')
args = parser.parse_args()


def knapSack(W, wt, val, n):

    # Base Case
    if n == 0 or W == 0:
        return 0

    # If weight of the nth item is more than Knapsack of capacity
    # W, then this item cannot be included in the optimal solution
    if (wt[n-1] > W):
        return knapSack(W, wt, val, n-1)

    # return the maximum of two cases:
    # (1) nth item included
    # (2) not included
    else:
        return max(val[n-1] + knapSack(W-wt[n-1], wt, val, n-1),
                   knapSack(W, wt, val, n-1))

# end of function knapSack


# To test above function
val = eval('[' + args.values + ']')
wt = eval('[' + args.weights + ']')
W = int(args.weight)
n = len(val)
print knapSack(W, wt, val, n)

# This code is contributed by Nikhil Kumar Singh
