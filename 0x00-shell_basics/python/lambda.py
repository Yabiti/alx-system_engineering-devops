people = [
    {"name": "Draco", "house" : "sltherin"},
    {"name": "Hermoine", "house" : "dam"},
    {"name": "pison", "house" : "len"}
]



people.sort(key=lambda person: person["name"])

print(people)