import sys
try:
    x = int(input("what's x? "))
    y = int(input("what's y? "))
except ValueError:
    print("invalid input")
    sys.exit(1)
try:
    result = x / y
except ZeroDivisionError:
    print("ERROR: cannot be divided by 0")
    sys.exit(1)
print(f" {x} / {y} = {result}")