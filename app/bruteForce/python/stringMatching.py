import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--text')
parser.add_argument('--pattern')
args = parser.parse_args()


text = args.text
pattern = args.pattern
output = -1

print text

for i in range(len(text) - len(pattern) + 1):
    j = 0
    while j < len(pattern) and pattern[j] == text[i+j]:
        j += 1
    if j == len(pattern):
        output = i
        print i * " " + pattern + ((len(text) - len(pattern) - i) * "|")
        break
    print i * " " + pattern + ((len(text) - len(pattern) - i) * "|")

print ""
if output >= 0:
    print "Found at index: %s" % output
else: 
    print "Not Found"