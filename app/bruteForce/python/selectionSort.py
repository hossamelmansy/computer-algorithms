import sys
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--list')
args = parser.parse_args()

alist = eval('[' + args.list + ']')
for i in range(len(alist) - 1):
    minPosition = i
    print alist,

    for j in range(i + 1, len(alist)):
        if alist[minPosition] > alist[j]:
            minPosition = j
    
    print ">> Minimum: %s || Swap %s <--> %s" % (alist[minPosition], alist[minPosition], alist[i])
    print ""
    alist[i], alist[minPosition] = alist[minPosition], alist[i]

    # print alist
    # print ""

print "Sorted Array:", alist

sys.stdout.flush()
