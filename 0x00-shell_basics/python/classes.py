class Flight():
    def __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []
    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True
    def open_seats(self):
        return self.capacity - len(self.passengers)
flight = Flight(3)

people = ["hermione", "ron", "harry", "draco"]
for person in people:
    if flight.add_passenger(person):
        print(f"successfully {person} Added to flight")
    else:
        print(f"no available seats to {person}")