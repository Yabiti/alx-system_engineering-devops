class Flight:
    def __init__(self,capacity):
        self.capacity = capacity
        self.passengers = []
    def add_passengers(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
            return True
    def open_seats(self):
        returnself.capacity - len(self.passengers)
Flight = flight(3)

people = ["harry", "hermone", "ron", "draco"]
for person in people:
    if flight,add_passenger(person):
        print("passenger added {person} to successfully")
    else:
        print("no available seats for {person}")