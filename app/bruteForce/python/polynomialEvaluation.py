import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--list')
parser.add_argument('--x')
args = parser.parse_args()

alist = eval('[' + args.list + ']')
x = int(args.x)

result = alist[0]

print "Result = list[0] =", result
for i in range(1, len(alist)):
    print "Result = (prevResult * x) + list[%s] =" % i,
    print "(%s * %s) + %s =" % (result, x, alist[i]),
    result = result * x + alist[i]
    print result

print ""
print "Result =", result
