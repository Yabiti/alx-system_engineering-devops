var createstudent = function(name, age) {
    var student = {
        name: name,
        age: age
    }
    return student;
}

var student1 = createstudent("yabu", 10);
var student2 = createstudent("mikey", 15)

console.log(student1.name, student1.age);
console.log(student2.name, student2.age);