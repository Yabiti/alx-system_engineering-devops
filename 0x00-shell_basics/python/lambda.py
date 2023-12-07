people = [
    {"name": "Draco", "house" : "sltherin"},
    {"name": "Hermoine", "house" : "dam"},
    {"name": "pison", "house" : "len"}
]

def f(person):
    return person["name"]
    
people.sort(key=f)

print(people)