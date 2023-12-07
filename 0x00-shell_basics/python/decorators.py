def wrapper():
    print("about to run a function")
    f()
    print("functions terminated")
    return wrapper

@wrapper
def hello():
    print("Hello, World!")

hello()