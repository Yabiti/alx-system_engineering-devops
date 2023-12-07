people = [
    {"name": "Draco", "house" : "sltherin\n"},
    {"name": "Hermoine", "house" : "dam\n"},
    {"name": "pison", "house" : "len\n"},
    {"name": "le", "house": "bmo"}
]

people.sort(key=lambda person: person["name"])

print(people)