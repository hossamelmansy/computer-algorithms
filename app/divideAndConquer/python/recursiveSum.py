import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--list')
args = parser.parse_args()

mylist = eval('[' + args.list + ']')


def recursiveSum(alist):
    if len(alist) == 0:
        return 0
    elif len(alist) == 1:
        return alist[0]
    else:
        middle = len(alist) // 2
        return recursiveSum(alist[:middle]) + recursiveSum(alist[middle:])


print recursiveSum(mylist)
