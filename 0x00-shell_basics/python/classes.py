class Fight:
    def __init__(self, capacity)
    self.capacity = capacity
    self.passengers = []

    def add_passengers(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)

    def open_seats(self):
        return self.capacity - self.passengers
Flight = flight(3):
