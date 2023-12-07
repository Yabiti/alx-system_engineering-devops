import sys

x = int(input("what's x? "))
y = int(input("what's y? "))

try:
    result = x / y
except ZeroDivisionError:
    print("ERROr: cannot be divided by zero")
    sys.exit(1)
print(f" {x} / {y} = {result}")