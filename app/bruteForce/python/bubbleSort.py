import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--list')
args = parser.parse_args()

alist = eval('[' + args.list + ']')
for i in range(len(alist) - 1):
    for j in range(0, len(alist)-i-1):
        if alist[j] > alist[j+1]:
            print alist,
            print ">> Since (%s > %s) then Swap %s <--> %s" % (alist[j], alist[j+1], alist[j], alist[j+1])
            alist[j], alist[j+1] = alist[j+1], alist[j]
        else:
            print alist,
            print ">> Since (%s <= %s) then Keep" % (alist[j], alist[j+1])
    print ""


print "Sorted Array:", alist
