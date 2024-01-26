var createStudent = function(name, age){
    var student = {
        name: name,
        age: age
    }
    return student;
}
var student1 = createStudent("marry", 15);
console.log("students", student1.name, student1.age);