import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--list')
parser.add_argument('--x')
args = parser.parse_args()

mylist = eval('[' + args.list + ']')
x = int(args.x)


def binarySearch(arr, l, r, x):

    # Check base case
    if r >= l:
        mid = l + (r - l) / 2

        # If element is present at the middle itself
        if arr[mid] == x:
            return mid

        # If element is smaller than mid, then it
        # can only be present in left subarray
        elif arr[mid] > x:
            return binarySearch(arr, l, mid-1, x)

        # Else the element can only be present
        # in right subarray
        else:
            return binarySearch(arr, mid + 1, r, x)

    else:
        # Element is not present in the array
        return -1


# Function call
result = binarySearch(mylist, 0, len(mylist) - 1, x)

if result != -1:
    print "Element is present at index %d" % result
else:
    print "Element is not present in array"
