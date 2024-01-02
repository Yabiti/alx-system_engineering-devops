#!/usr/bin/python3
''' makes a get request to a REST API '''
import requests
from sys import argv


if __name__ == '__main__':
    url = 'https://jsonplaceholder.typicode.com/'
    i = 0
    j = 0
    n = []
    user_id = argv[1]
    user_data = requests.get(url + 'users/' + user_id).json()
    task_data = requests.get(url + 'todos').json()
    m = user_data['name']
    for task in task_data:
        if str(task['userId']) == user_id:
            if str(task["completed"]) == 'True':
                n.append(str(task["title"]))
                j = j + 1
            i = i + 1
    print("Employee {} is done with tasks({}/{}):".format(m, j, i))
    for k in n:
        print('\t {}'.format(k))
