people = [
    {"name": "Draco", "house" : "sltherin"},
    {"name": "Hermoine", "house" : "dam"},
    {"name": "pison", "house" : "len"},
    {"name": "le", "house": "bmo"}
]



people.sort(key=lambda person: person["name"])

print(people)