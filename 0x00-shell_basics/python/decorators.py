def announce():
    def wrapper():
    print("about to run a function")
    f()
    print("functions terminated")
    return wrapper

@announce
def hello():
    print("Hello, World!")

hello()