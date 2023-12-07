def announce(f):
    def wrapper():
        print("About to run a function")
        f()
        print("end of function")
    return wrapper

@announce
