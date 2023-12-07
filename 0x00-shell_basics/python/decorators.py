def wrapper(f):
    print("about to run a function")
    f()
    print("functions terminated")
@wrapper
def hello(f):
    print("Hello, World!")

hello()