import math
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--points')
args = parser.parse_args()

points = eval('[' + args.points + ']')

minDistance = float('inf')
print "Minimum distance:", minDistance
print ""

for i in range(len(points)):
    for j in range(i+1, len(points)):
        x1, y1 = points[i]
        x2, y2 = points[j]
        distance = math.sqrt(math.pow(x1 - x2, 2) + math.pow(y1 - y2, 2))

        print "Distance between (%d, %d) and (%d, %d) = %d" % (
            x1, y1, x2, y1, distance)

        if distance < minDistance:
            minDistance = distance
            point1 = i
            point2 = j
    print ""

x1, y1 = points[point1]
x2, y2 = points[point2]
print "Minimum distance between (%d, %d) and (%d, %d) = %d" % (
    x1, y1, x2, y2, minDistance)
